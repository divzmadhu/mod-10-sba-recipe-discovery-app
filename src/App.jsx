
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import Navbar from "./components/Navbar/Navbar";
import LocalStorageTest from "./components/LocalStorageTest/LocalStorageTest";


export default function App() {
  return (
    <div>
      <Navbar />
      <LocalStorageTest />
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
      </Routes>
    </div>
  )
}