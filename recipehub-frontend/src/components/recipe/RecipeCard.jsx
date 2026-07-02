import Card from "../common/Card";

function RecipeCard({ recipe }) {

    return (

        <Card>

            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-52 object-cover rounded-xl"
            />

            <div className="mt-4">

                <h3 className="text-xl font-bold">

                    {recipe.title}

                </h3>

                <p className="text-gray-500 mt-2">

                    {recipe.difficulty}

                    {" • "}

                    {recipe.time}

                    {" • "}

                    {recipe.calories} kcal

                </p>

                <div className="flex justify-between mt-4">

                    <span>

                        ⭐ {recipe.rating}

                    </span>

                    <span>

                        ❤️ {recipe.favorites}

                    </span>

                </div>

            </div>

        </Card>

    );

}

export default RecipeCard;