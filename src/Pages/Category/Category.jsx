import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Category() {

    // Get the category name from the URL
    const { categoryName } = useParams();

    // Fetch recipes belonging to that category
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

    if (loading) {
        return <h2>Loading recipes...</h2>;
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
                        <div key={meal.idMeal}>
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                width="200"
                            />

                            <h3>{meal.strMeal}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}