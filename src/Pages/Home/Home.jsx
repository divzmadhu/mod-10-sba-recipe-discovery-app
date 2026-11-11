import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Home() {

    const { data, loading, error } = useFetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    if (loading) {
        return <Spinner />;
    }

    if (error) {
       return <ErrorMessage message={error} />;
    }

    return (
        <div>
            <h1>Recipe Categories</h1>

            <div>
                {data.categories.map((category) => (
                    <Link
                        key={category.idCategory}
                        to={`/category/${category.strCategory}`}
                    >
                        <div>

                            <img
                                src={category.strCategoryThumb}
                                alt={category.strCategory}
                                width="200"
                            />

                            <h3>{category.strCategory}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}