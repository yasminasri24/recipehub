import Container from "../common/Container";
import Button from "../common/Button";
import recipes from "../../data/recipes";

function RecipeOfTheDay() {

    const recipe = recipes[0];

    return (

        <section className="py-20 bg-green-50">

            <Container>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-3xl shadow-lg"
                    />

                    <div>

                        <p className="text-green-600 font-semibold">

                            🍽 Recipe of the Day

                        </p>

                        <h2 className="text-5xl font-bold mt-3">

                            {recipe.title}

                        </h2>

                        <p className="text-gray-600 mt-6">

                            Today's featured recipe selected for you.
                            Perfect for a delicious homemade meal.

                        </p>

                        <div className="flex gap-6 mt-8">

                            <span>⭐ {recipe.rating}</span>

                            <span>⏱ {recipe.time}</span>

                            <span>❤️ {recipe.favorites}</span>

                        </div>

                        <div className="mt-10">

                            <Button>

                                Cook Now

                            </Button>

                        </div>

                    </div>

                </div>

            </Container>

        </section>

    );

}

export default RecipeOfTheDay;