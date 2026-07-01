import Card from "../common/Card";

function RecipeCard() {

    return (

        <Card>

            <div className="overflow-hidden rounded-xl">

                <img
                    src="https://placehold.co/600x400"
                    alt="Recipe"
                    className="
                        w-full
                        h-52
                        object-cover
                        transition-transform
                        duration-300
                        hover:scale-105
                    "
                />

            </div>

            <div className="mt-5">

                <h3 className="font-bold text-xl">

                    Chicken Teriyaki

                </h3>

                <p className="text-gray-500 mt-2">

                    Easy • 25 mins • 420 kcal

                </p>

                <div className="flex justify-between mt-5">

                    <span>

                        ⭐ 4.9

                    </span>

                    <span>

                        ❤️ 245

                    </span>

                </div>

            </div>

        </Card>

    );

}

export default RecipeCard;