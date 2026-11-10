import { Link } from "react-router-dom";

// Navigation bar to move between the Home, Search, and Favorites pages.
export default function Navbar() {
    return (
        <nav>
            <h2>Recipe Finder</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    );
}