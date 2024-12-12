// DietOverweight2.js
import React from 'react';
import './DietOverweight2.css'; // Ensure you have a CSS file for styling

const DietOverweight2 = () => {
  const data = [
    {
      day: 'Monday',
      meals: {
        breakfast: 'Whole grain toast with avocado',
        lunch: 'Chicken and vegetable soup',
        dinner: 'Baked tilapia with mixed vegetables',
      },
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: 'Berry smoothie with protein powder',
        lunch: 'Mixed greens salad with nuts',
        dinner: 'Quinoa and vegetable stir-fry',
      },
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: 'Scrambled eggs with spinach',
        lunch: 'Chicken stir-fry with vegetables',
        dinner: 'Baked sweet potato with black beans',
      },
    },
    {
      day: 'Thursday',
      meals: {
        breakfast: 'Greek yogurt with honey',
        lunch: 'Quinoa and black bean salad',
        dinner: 'Stir-fried tofu with broccoli',
      },
    },
    {
      day: 'Friday',
      meals: {
        breakfast: 'Smoothie with spinach and banana',
        lunch: 'Turkey and avocado wrap',
        dinner: 'Vegetable soup with whole-grain bread',
      },
    },
    {
      day: 'Saturday',
      meals: {
        breakfast: 'Chia pudding with almond milk',
        lunch: 'Salmon salad with mixed greens',
        dinner: 'Chicken stir-fry with vegetables',
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
    <div className="diet-overweight2">
      <h1>Dietary Recommendations for Overweight Level 2</h1>
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

export default DietOverweight2;
