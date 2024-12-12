// DietOverweight1.js
import React from 'react';
import './DietOverweight1.css'; // Ensure you have a CSS file for styling

const DietOverweight1 = () => {
  const data = [
    {
      day: 'Monday',
      meals: {
        breakfast: 'Greek yogurt with nuts',
        lunch: 'Quinoa and vegetable stir-fry',
        dinner: 'Grilled turkey with steamed broccoli',
      },
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: 'Chia pudding with almond milk',
        lunch: 'Chicken and vegetable soup',
        dinner: 'Baked tilapia with mixed vegetables',
      },
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: 'Smoothie with spinach and banana',
        lunch: 'Turkey and avocado wrap',
        dinner: 'Vegetable soup with whole-grain bread',
      },
    },
    {
      day: 'Thursday',
      meals: {
        breakfast: 'Scrambled eggs with spinach',
        lunch: 'Chickpea salad with feta cheese',
        dinner: 'Grilled shrimp with mixed vegetables',
      },
    },
    {
      day: 'Friday',
      meals: {
        breakfast: 'Whole-grain toast with avocado',
        lunch: 'Chicken stir-fry with vegetables',
        dinner: 'Baked sweet potato with black beans',
      },
    },
    {
      day: 'Saturday',
      meals: {
        breakfast: 'Berry smoothie with protein powder',
        lunch: 'Mixed greens salad with nuts',
        dinner: 'Quinoa and vegetable stir-fry',
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
    <div className="diet-overweight1">
      <h1>Dietary Recommendations for Overweight Level 1</h1>
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

export default DietOverweight1;
