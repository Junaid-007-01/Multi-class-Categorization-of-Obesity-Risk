// DietObesity2.js
import React from 'react';
import './DietObesity2.css'; // Ensure you have a CSS file for styling

const DietObesity2 = () => {
  const data = [
    {
      day: 'Monday',
      meals: {
        breakfast: 'Scrambled eggs with spinach',
        lunch: 'Chickpea salad with feta cheese',
        dinner: 'Grilled shrimp with mixed vegetables',
      },
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: 'Greek yogurt with nuts',
        lunch: 'Quinoa and vegetable stir-fry',
        dinner: 'Baked tilapia with mixed vegetables',
      },
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: 'Berry smoothie with protein powder',
        lunch: 'Mixed greens salad with nuts',
        dinner: 'Chicken stir-fry with vegetables',
      },
    },
    {
      day: 'Thursday',
      meals: {
        breakfast: 'Whole grain toast with avocado',
        lunch: 'Chicken and vegetable soup',
        dinner: 'Baked sweet potato with black beans',
      },
    },
    {
      day: 'Friday',
      meals: {
        breakfast: 'Chia pudding with almond milk',
        lunch: 'Salmon salad with mixed greens',
        dinner: 'Quinoa and vegetable stir-fry',
      },
    },
    {
      day: 'Saturday',
      meals: {
        breakfast: 'Oatmeal with berries',
        lunch: 'Turkey lettuce wraps',
        dinner: 'Stuffed bell peppers with quinoa',
      },
    },
    {
      day: 'Sunday',
      meals: {
        breakfast: 'Smoothie with spinach and banana',
        lunch: 'Lentil soup with spinach',
        dinner: 'Roasted chicken with roasted vegetables',
      },
    },
  ];

  return (
    <div className="diet-obesity2">
      <h1>Dietary Recommendations for Obesity Level 2</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.meals.breakfast}</td>
              <td>{item.meals.lunch}</td>
              <td>{item.meals.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DietObesity2;
