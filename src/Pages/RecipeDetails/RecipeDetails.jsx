import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useFavorites } from "../../context/FavoritesContext";

export default function RecipeDetails() {

    const { recipeId } = useParams();

    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    );

    if (loading) {
        return <h2>Loading recipe details...</h2>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const recipe = data.meals?.[0];
    if (!recipe) {
        return <p>Recipe not found.</p>;
    }


    const favorite = isFavorite(recipe.idMeal);

  
    return (
        <div>
            <h1>{recipe.strMeal}</h1>

            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width="300"
            />

            <button
                onClick={() =>
                    favorite
                        ? removeFavorite(recipe.idMeal)
                        : addFavorite(recipe.idMeal)
                }
            >
                {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <h2>Ingredients</h2>

            <ul>
                {Array.from({ length: 20 }, (_, index) => {
                    const ingredient = recipe[`strIngredient${index + 1}`];
                    const measure = recipe[`strMeasure${index + 1}`];

                    if (ingredient && ingredient.trim()) {
                        return (
                            <li key={index}>
                                {measure} {ingredient}
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>

            <h2>Instructions</h2>
            <p>{recipe.strInstructions}</p>
        </div>
    );
}