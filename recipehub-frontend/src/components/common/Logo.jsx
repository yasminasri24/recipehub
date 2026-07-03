import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link
            to="/"
            className="flex items-center gap-2"
        >
            <span className="text-4xl">
                🍳
            </span>

            <div>

                <h1 className="text-2xl font-bold text-green-600">
                    RecipeHub
                </h1>

                <p className="text-xs text-gray-500">
                    Cook • Share • Inspire
                </p>

            </div>

        </Link>
    );
}

export default Logo;