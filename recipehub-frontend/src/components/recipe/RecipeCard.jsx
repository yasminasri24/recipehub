import Card from "../common/Card";
import Button from "../common/Button";
import { FaHeart } from "react-icons/fa";

function RecipeCard({ recipe }) {

    return (

        <Card className="
            hover:-translate-y-2
            hover:shadow-xl
            transition-all
            duration-300
            "
        >

            <div className="relative">

                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-52 object-cover"
                />

                <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">

                    {recipe.difficulty}

                </span>

                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">

                    <FaHeart className="text-red-500"/>

                </button>

            </div>

            <div className="mt-5">

                <h3 className="text-xl font-bold">

                    {recipe.title}

                </h3>

                <p className="text-gray-500 mt-1">

                    By {recipe.author}

                </p>

                <div className="flex justify-between mt-5">

                    <span>

                        ⭐ {recipe.rating}

                    </span>

                    <span>

                        ❤️ {recipe.favorites}

                    </span>

                </div>

                <div className="flex justify-between text-gray-500 mt-4">

                    <span>

                        ⏱ {recipe.time}

                    </span>

                    <span>

                        {recipe.calories} kcal

                    </span>

                </div>

                <Button
                    className="w-full mt-6"
                >

                    View Recipe

                </Button>

            </div>

        </Card>

    );

}

export default RecipeCard;