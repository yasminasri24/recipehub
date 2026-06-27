import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow-md">

            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-bold text-green-600"
                >
                    RecipeHub
                </Link>

                <div className="flex gap-6">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/recipes">
                        Recipes
                    </Link>

                    <Link to="/login">
                        Login
                    </Link>

                    <Link to="/register">
                        Register
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;