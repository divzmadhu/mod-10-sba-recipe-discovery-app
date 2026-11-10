import useFetch from "../../hooks/useFetch";

export default function Home() {

    const { data, loading, error } = useFetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    if (loading) {
        return <h2>Loading categories...</h2>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Recipe Categories</h1>

            <div>
                {data.categories.map((category) => (
                    <div key={category.idCategory}>
                        <img
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                            width="200"
                        />

                        <h3>{category.strCategory}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}