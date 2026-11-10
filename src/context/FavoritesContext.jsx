import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Create a Context to share favorite recipes across components.
const FavoritesContext = createContext();

// Provider to manage favorite recipes throughout the application.
export function FavoritesProvider({ children }) {

    // Store favorite recipe IDs using Local Storage.
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    // Add a recipe to favorites.
    const addFavorite = (recipeId) => {
        if (!favorites.includes(recipeId)) {
            setFavorites([...favorites, recipeId]);
        }
    };

    // Remove a recipe from favorites.
    const removeFavorite = (recipeId) => {
        setFavorites(favorites.filter((id) => id !== recipeId));
    };

    // Check whether a recipe is already a favorite.
    const isFavorite = (recipeId) => {
        return favorites.includes(recipeId);
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

// Custom hook to access FavoritesContext.
export function useFavorites() {
    return useContext(FavoritesContext);
}