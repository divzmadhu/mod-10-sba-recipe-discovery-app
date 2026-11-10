import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function Search() {

    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get("query") || "";

    const { data, loading, error } = useFetch(
        searchQuery
            ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`
            : null
    );

    return (
        <div>
            <h1>Search Recipes</h1>

            <input
                type="text"
                placeholder="Search for a recipe..."
                value={searchQuery}
                onChange={(event) =>
                    setSearchParams({ query: event.target.value })
                }
            />
            {loading && <p>Searching recipes...</p>}

            {error && <p>Error: {error}</p>}

            {!loading && !error && searchQuery && (
                <div>
                    {data?.meals ? (
                        data.meals.map((meal) => (
                            <RecipeCard
                                key={meal.idMeal}
                                meal={meal}
                            />
                        ))
                    ) : (
                        <p>No recipes found.</p>
                    )}
                </div>
            )}
        </div>
    );
}