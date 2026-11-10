import useLocalStorage from "../../hooks/useLocalStorage";

export default function LocalStorageTest() {
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    function addFavorite() {
        setFavorites([...favorites, "Test Recipe"]);
    }

    return (
        <div>
            <h2>Local Storage Test</h2>

            <button onClick={addFavorite}>
                Add Favorite
            </button>

            <p>Favorites: {favorites.join(", ")}</p>
        </div>
    );
}