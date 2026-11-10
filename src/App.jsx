
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./Pages/Favorites/Favorites";
import Search from "./Pages/Search/Search";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/:categoryName"
          element={<Category />}
        />
        <Route
          path="/recipe/:recipeId"
          element={<RecipeDetails />}
        />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}