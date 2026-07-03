import { Link } from "react-router-dom";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import Logo from "../common/Logo";
import Button from "../common/Button";

function Navbar() {
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
                            to="/categories"
                            className="text-gray-700 hover:text-green-600 font-medium transition"
                        >
                            Categories
                        </Link>

                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-green-600 font-medium transition"
                        >
                            About
                        </Link>

                    </nav>

                    {/* Right Side */}

                    <div className="flex items-center gap-5">

                        <button
                            className="
                                text-gray-600
                                hover:text-red-500
                                transition
                            "
                        >
                            <FaHeart size={20} />
                        </button>

                        <Link
                            to="/login"
                        >
                            <Button variant="secondary">
                                Login
                            </Button>
                        </Link>

                        <Link
                            to="/register"
                        >
                            <Button>
                                Sign Up
                            </Button>
                        </Link>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Navbar;