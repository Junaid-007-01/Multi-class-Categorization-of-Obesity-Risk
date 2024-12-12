from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the entire pipeline model
model_path = os.path.join(os.path.dirname(__file__), 'best_model_pipeline.pkl')

with open(model_path, 'rb') as file:
    model = pickle.load(file)  # Load the entire pipeline object

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data
        data = request.get_json()
        print(f"Received data: {data}")

        # Convert JSON data to DataFrame
        df = pd.DataFrame([data])
        print("DataFrame before renaming columns:")
        print(df)

        # Rename columns to match model expectations
        df.rename(columns={
            'gender': 'Gender',
            'age': 'Age',
            'height': 'Height',
            'weight': 'Weight',
            'family_history_with_overweight': 'family_history_with_overweight',
            'FAVC': 'Freq_consump_of_high-caloric_food',
            'FCVC': 'Freq_of_veg_consump',
            'NCP': 'No._of_main_meals',
            'CAEC': 'Consump_of_food_btw_meals',
            'SMOKE': 'SMOKE',
            'CH2O': 'Daily_water_intake(L)',
            'FAF': 'Phy_activity_freq',
            'TUE': 'Time_using_tech_devices',
            'CALC': 'Alcohol_consumption',
            'MTRANS': 'Transportation_used'
        }, inplace=True)

        print("DataFrame after renaming columns:")
        print(df)

        # Ensure data types are correct
        df['Age'] = pd.to_numeric(df['Age'], errors='coerce')
        df['Height'] = pd.to_numeric(df['Height'], errors='coerce')
        df['Weight'] = pd.to_numeric(df['Weight'], errors='coerce')

        print("DataFrame with correct data types:")
        print(df)

        # Check if all required columns are present
        required_columns = ['Gender', 'Age', 'Height', 'Weight', 'family_history_with_overweight', 'Freq_consump_of_high-caloric_food', 'Freq_of_veg_consump', 'No._of_main_meals', 'Consump_of_food_btw_meals', 'SMOKE', 'Daily_water_intake(L)', 'Phy_activity_freq', 'Time_using_tech_devices', 'Alcohol_consumption', 'Transportation_used']
        missing_columns = [col for col in required_columns if col not in df.columns]
        if missing_columns:
            for col in missing_columns:
                df[col] = np.nan  # Fill missing columns with NaN
            print(f"Missing columns filled with NaN: {missing_columns}")

        # Ensure the DataFrame has the correct column order
        df = df[required_columns]
        print("DataFrame after reindexing and filling missing columns:")
        print(df)

        # Use the entire pipeline to transform the data and make predictions
        prediction = model.predict(df)
        result = int(prediction[0])
        print(f"Prediction: {result}")

        # Map prediction to URL
        prediction_dict = {
            0: 'Insufficient weight',
            1: 'Normal weight',
            2: 'Obesity level 1',
            3: 'Obesity level 2',
            4: 'Obesity level 3',
            5: 'Overweight level 1',
            6: 'Overweight level 2'
        }
        url_path = prediction_dict.get(result, 'diet-default')  # Default path if prediction not found
        url = f"http://localhost:3000/{url_path}"
        print(f"Generated URL: {url}")

        return jsonify({'prediction': result, 'url': url})

    except Exception as e:
        print(f"Exception occurred: {e}")
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)