import { currencyFormatter } from "../util/formatting.js";
import Button from './UI/Button.jsx'
import { useContext } from "react";
import CartContext from "../store/CartContex.jsx";
export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const backendUrl = process.env.VERCEL_URL || 'http://localhost:3000'

  function handleAddMealToCart() {
    cartCtx.addItem(meal);

  }
  return (
    <li className="meal-item">
      <article>
        <img src={`${backendUrl}/api/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
