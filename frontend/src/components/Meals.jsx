import { useState, useEffect } from "react";

import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const backendUrl = process.env.VERCEL_URL || 'http://localhost:3000'

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(`${backendUrl}/api/meals`);

      if (!response.ok) {
        // ...
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
