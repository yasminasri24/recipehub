import { Link } from "react-router-dom";
import Button from "../common/Button";
import Logo from "../common/Logo";

function Navbar() {
    return (
        <nav className="bg-white border-b sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

                <Logo />

                <div className="hidden md:flex gap-8">

                    <Link to="/">Home</Link>

                    <Link to="/recipes">Recipes</Link>

                    <Link to="/about">About</Link>

                </div>

                <div className="flex gap-3">

                    <Link to="/login">

                        <Button variant="secondary">

                            Login

                        </Button>

                    </Link>

                    <Link to="/register">

                        <Button>

                            Register

                        </Button>

                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;