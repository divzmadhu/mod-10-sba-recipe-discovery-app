import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useDebounce from "../../hooks/useDebounce";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Search() {

    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get("query") || "";

    // Wait 500ms after the user stops typing before updating the search value.
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    const { data, loading, error } = useFetch(
        debouncedSearchQuery
            ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(debouncedSearchQuery)}`
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
            {loading && <Spinner />}

            {error && <ErrorMessage message={error} />}
            
            {!loading && !error && debouncedSearchQuery && (
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