import { Link } from "react-router-dom";
import { FaClock, FaStar, FaHeart } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";

function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            {/* Recipe Image */}
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded-xl"
            />
            <div className="p-5">

                {/* Rating & Time */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">

                    <div className="flex items-center gap-1">

                        <FaStar className="text-yellow-400" />

                        <span>
                            {recipe.average_rating ?? "0.0"}
                        </span>

                    </div>

                    <div className="flex items-center gap-1">

                        <FaClock />

                        <span>
                            {recipe.cooking_time} mins
                        </span>

                    </div>

                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-2 line-clamp-1">

                    {recipe.title}

                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">

                    {recipe.description}

                </p>

                {/* Information */}
                <div className="flex justify-between text-sm mb-4">

                    <span>

                        🍽 {recipe.servings} servings

                    </span>

                    <span>

                        {recipe.difficulty}

                    </span>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">

                    {recipe.tags?.map(tag => (

                        <span
                            key={tag.id}
                            className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full"
                        >

                            {tag.name}

                        </span>

                    ))}

                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">

                    <FavoriteButton recipe={recipe} />

                    <Link
                        to={`/recipes/${recipe.id}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl"
                    >

                        View Recipe

                    </Link>

                </div>

            </div>

        </div>
    );
}

export default RecipeCard;