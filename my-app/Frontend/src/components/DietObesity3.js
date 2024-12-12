// DietObesity1.js
import React from 'react';
import './DietObesity1.css'; // Ensure you have a CSS file for styling

const DietObesity1 = () => {
  const data = [
    {
      day: 'Monday',
      meals: {
        breakfast: 'Berry smoothie with spinach',
        lunch: 'Turkey lettuce wraps',
        dinner: 'Stuffed bell peppers with quinoa',
      },
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: 'Chia pudding with almond milk',
        lunch: 'Salmon salad with mixed greens',
        dinner: 'Chicken stir-fry with vegetables',
      },
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: 'Scrambled eggs with spinach',
        lunch: 'Chicken and vegetable soup',
        dinner: 'Vegetable soup with whole-grain bread',
      },
    },
    {
      day: 'Thursday',
      meals: {
        breakfast: 'Smoothie with spinach and banana',
        lunch: 'Turkey and avocado wrap',
        dinner: 'Quinoa and vegetable stir-fry',
      },
    },
    {
      day: 'Friday',
      meals: {
        breakfast: 'Greek yogurt with honey',
        lunch: 'Chickpea salad with feta cheese',
        dinner: 'Grilled shrimp with mixed vegetables',
      },
    },
    {
      day: 'Saturday',
      meals: {
        breakfast: 'Oatmeal with berries',
        lunch: 'Mixed greens salad with nuts',
        dinner: 'Baked sweet potato with black beans',
      },
    },
    {
      day: 'Sunday',
      meals: {
        breakfast: 'Whole-grain pancakes with berries',
        lunch: 'Lentil soup with spinach',
        dinner: 'Roasted chicken with roasted vegetables',
      },
    },
  ];

  return (
    <div className="diet-obesity1">
      <h1>Dietary Recommendations for Obesity Level 1</h1>
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

export default DietObesity1;
