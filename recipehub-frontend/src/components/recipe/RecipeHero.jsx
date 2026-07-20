import { FaClock, FaStar } from "react-icons/fa";

function RecipeHero({ recipe }) {

    return (

        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">

            <img
                src={
                    recipe.image
                        ? `http://127.0.0.1:8000/storage/${recipe.image}`
                        : "https://placehold.co/1200x500?text=RecipeHub"
                }
                alt={recipe.title}
                className="w-full h-96 object-cover"
            />

            <div className="p-8">

                <h1 className="text-4xl font-bold mb-4">

                    {recipe.title}

                </h1>

                <p className="text-gray-600 mb-6">

                    {recipe.description}

                </p>

                <div className="flex flex-wrap gap-6 text-gray-700">

                    <span className="flex items-center gap-2">

                        <FaStar className="text-yellow-400" />

                        {recipe.average_rating}

                    </span>

                    <span className="flex items-center gap-2">

                        <FaClock />

                        {recipe.cooking_time} mins

                    </span>

                    <span>

                        🍽 {recipe.servings} Servings

                    </span>

                    <span>

                        {recipe.difficulty}

                    </span>

                </div>

            </div>

        </section>

    );

}

export default RecipeHero;