import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link
            to="/"
            className="flex items-center gap-2"
        >
            <span className="text-3xl">
                🍳
            </span>

            <span
                className="
                text-2xl
                font-bold
                text-green-600
            "
            >
                RecipeHub
            </span>
        </Link>
    );
}

export default Logo;