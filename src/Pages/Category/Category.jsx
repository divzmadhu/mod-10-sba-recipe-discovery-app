import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Spinner from "../../components/Spinner/Spinner";

export default function Category() {

    // Get the category name from the URL
    const { categoryName } = useParams();

    // Fetch recipes belonging to that category
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const meals = data.meals || [];

    return (
        <div>
            <h1>{categoryName} Recipes</h1>

            {meals.length === 0 ? (
                <p>No recipes found.</p>
            ) : (

                <div>

                    {meals.map((meal) => (
                        <RecipeCard
                            key={meal.idMeal}
                            meal={meal}
                        />
                    ))}
                </div>
            )}
        </div >
    );
}