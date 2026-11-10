import { Link } from "react-router-dom";

// Reusable component to display a recipe's image and name, with a link to its details page.
export default function RecipeCard({ meal }) {
    return (
        <Link to={`/recipe/${meal.idMeal}`}>
            <div>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width="200"
                />
                <h3>{meal.strMeal}</h3>
            </div>
        </Link>
    );
}