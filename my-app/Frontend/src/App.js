import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DietInsufficient from './components/DietInsufficient';
import DietNormal from './components/DietNormal';
import DietOverweight1 from './components/DietOverweight1';
import DietOverweight2 from './components/DietOverweight2';
import DietObesity1 from './components/DietObesity1';
import DietObesity2 from './components/DietObesity2';
import DietObesity3 from './components/DietObesity3';

function App() {
  const [formData, setFormData] = useState({
    gender: '',
    age: '25',
    height: '1.7',
    weight: '60',
    family_history_with_overweight: '1',
    FAVC: '',
    FCVC: '3',
    NCP: '2',
    CAEC: '',
    SMOKE: '',
    CH2O: '1',
    FAF: '3',
    TUE: '2',
    CALC: '',
    MTRANS: '',
  });

  const [result, setResult] = useState('');
  const [predictionUrl, setPredictionUrl] = useState('');
  const [fact, setFact] = useState('');

  const facts = [
    "It takes the brain 20 minutes to sense that a person is full.",
    "Women with post-traumatic stress disorder are more likely to be overweight or obese.",
    "One in three U.S. children and teens are overweight or obese.",
    "Childhood obesity affects self-esteem, which can affect employment and higher education later in life.",
    "Obesity prevalence was highest among U.S. adults with a high school diploma or some college education."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      setFact(randomFact);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const resultData = await response.json();
      const predictionValue = resultData.prediction;
      const predictionText = getPredictionText(predictionValue);

      setResult(predictionText);
      setPredictionUrl(getPredictionUrl(predictionValue));

    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  const getPredictionText = (value) => {
    switch (value) {
      case 0: return 'Insufficient weight';
      case 1: return 'Normal weight';
      case 2: return 'Obesity Level 1';
      case 3: return 'Obesity Level 2';
      case 4: return 'Obesity Level 3';
      case 5: return 'Overweight Level 1';
      case 6: return 'Overweight Level 2';
      default: return 'Unknown';
    }
  };

  const getPredictionUrl = (value) => {
    switch (value) {
      case 0: return '/diet-insufficient';
      case 1: return '/diet-normal';
      case 2: return '/diet-obesity1';
      case 3: return '/diet-obesity2';
      case 4: return '/diet-obesity3';
      case 5: return '/diet-overweight1';
      case 6: return '/diet-overweight2';
      default: return '/';
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Obesity Risk Prediction</h1>
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <form onSubmit={handleSubmit}>
                <div className="form-container">
                  <div className="form-column">
                    <div>
                      <label>Gender:</label>
                      <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label>Age:</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        step="0.0001"  // Allow more precision
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label>Height (meters):</label>
                      <input
                        type="number"
                        step="0.0001"  // Allow more precision
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label>Weight (kg):</label>
                      <input
                        type="number"
                        step="0.001"  // Allow more precision
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label>Family History with Overweight:</label>
                      <select name="family_history_with_overweight" value={formData.family_history_with_overweight} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div>
                      <label>Frequent Consumption of High-Caloric Food (FAVC):</label>
                      <select name="FAVC" value={formData.FAVC} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div>
                      <label>Frequency of Vegetable Consumption (FCVC):</label>
                      <input
                        type="number"
                        step="0.0000001"
                        name="FCVC"
                        value={formData.FCVC}
                        onChange={handleChange}
                        min="1"
                        max="3"
                        required
                      />
                    </div>
                    <div>
                      <label>Number of Main Meals (NCP):</label>
                      <input
                        type="number"
                        step="0.0001"
                        name="NCP"
                        value={formData.NCP}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-column">
                    <div>
                      <label>Consumption of Food Between Meals (CAEC):</label>
                      <select name="CAEC" value={formData.CAEC} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="0">No</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Frequently">Frequently</option>
                        <option value="Always">Always</option>
                      </select>
                    </div>
                    <div>
                      <label>Smoker:</label>
                      <select name="SMOKE" value={formData.SMOKE} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div>
                      <label>Daily Water Intake (liters):</label>
                      <input
                        type="number"
                        step="0.0001"  // Allow more precision
                        name="CH2O"
                        value={formData.CH2O}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label>Physical Activity Frequency (hours per week):</label>
                      <input
                        type="number"
                        step="0.0001"  // Allow more precision
                        name="FAF"
                        value={formData.FAF}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label>Time Using Technology Devices (hours per day):</label>
                      <input
                        type="number"
                        step="0.000001"  // Allow more precision
                        name="TUE"
                        value={formData.TUE}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label>Consumption of Alcohol (CALC):</label>
                      <select name="CALC" value={formData.CALC} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="0">No</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Frequently">Frequently</option>
                        <option value="Always">Always</option>
                      </select>
                    </div>
                    <div>
                      <label>Transportation Used:</label>
                      <select name="MTRANS" value={formData.MTRANS} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Motorbike">Motorbike</option>
                        <option value="Bike">Bike</option>
                        <option value="Public_Transportation">Public Transportation</option>
                        <option value="Walking">Walking</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit">Predict</button>
              </form>
              {result && (
                <div className="prediction-result">
                  <h2>Prediction: {result}</h2>
                  <a href={predictionUrl} target="_blank" rel="noopener noreferrer">View Dietary Recommendations</a>
                </div>
              )}
              <div className="health-fact">
                <h3>Did you know?</h3>
                <p>{fact}</p>
              </div>
            </>
          } />
          <Route path="/diet-insufficient" element={<DietInsufficient />} />
          <Route path="/diet-normal" element={<DietNormal />} />
          <Route path="/diet-overweight1" element={<DietOverweight1 />} />
          <Route path="/diet-overweight2" element={<DietOverweight2 />} />
          <Route path="/diet-obesity1" element={<DietObesity1 />} />
          <Route path="/diet-obesity2" element={<DietObesity2 />} />
          <Route path="/diet-obesity3" element={<DietObesity3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
