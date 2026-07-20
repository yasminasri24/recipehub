import { Link } from "react-router-dom";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { useAuth } from "../../contexts/AuthContext";
import UserMenu from "./UserMenu";

function Navbar() {

    const { loading, isAuthenticated, user } = useAuth();

    if (loading) {
        return null;
    }

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-20">

                    {/* Logo */}

                    <Logo />

                    {/* Navigation */}

                    <nav className="hidden md:flex items-center gap-8">

                        <Link
                            to="/"
                            className="text-gray-700 hover:text-green-600 font-medium transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/recipes"
                            className="text-gray-700 hover:text-green-600 font-medium transition"
                        >
                            Recipes
                        </Link>

                        <Link
                            to="/favorites"
                        >
                            Favorites
                        </Link>

                        <Link
                            to="/categories"
                            className="text-gray-700 hover:text-green-600 font-medium transition"
                        >
                            Categories
                        </Link>

                        <Link
                            to="/recipes/create"
                            className="
                                bg-orange-500
                                text-white
                                px-4
                                py-2
                                rounded-lg
                            "
                        >
                            Create Recipe
                        </Link>

                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-green-600 font-medium transition"
                        >
                            About
                        </Link>

                    </nav>

                    {/* Right Side */}

                    <div className="flex items-center gap-4">

                        {isAuthenticated ? (

                            <UserMenu />

                        ) : (

                            <>
                                <Link
                                    to="/login"
                                    className="font-medium"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="bg-green-600 text-white px-5 py-2 rounded-full"
                                >
                                    Sign Up
                                </Link>
                            </>

                        )}

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Navbar;