import { useEffect, useState } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function Favorites() {
    const { favorites, removeFavorite } = useFavorites();

    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchFavoriteRecipes() {
            if (favorites.length === 0) {
                setFavoriteRecipes([]);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const recipeRequests = favorites.map((id) =>
                    fetch(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                    )
                );

                const responses = await Promise.all(recipeRequests);

                const results = await Promise.all(
                    responses.map((response) => {
                        if (!response.ok) {
                            throw new Error("Failed to fetch favorite recipes");
                        }

                        return response.json();
                    })
                );

                const recipes = results
                    .map((result) => result.meals?.[0])
                    .filter(Boolean);

                setFavoriteRecipes(recipes);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchFavoriteRecipes();
    }, [favorites]);

    if (loading) {
        return <h2>Loading favorite recipes...</h2>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>My Favorite Recipes</h1>

            {favoriteRecipes.length === 0 ? (
                <p>You haven't added any favorite recipes yet.</p>
            ) : (
                <div>
                    {favoriteRecipes.map((meal) => (
                        <div key={meal.idMeal}>
                            <RecipeCard meal={meal} />

                            <button onClick={() => removeFavorite(meal.idMeal)}>
                                Remove from Favorites
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}