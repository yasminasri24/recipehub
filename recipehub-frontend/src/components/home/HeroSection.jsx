import Button from "../common/Button";

function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-green-50 to-green-100">

            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="max-w-3xl">

                    <p className="text-green-600 font-semibold mb-3">
                        Welcome to RecipeHub
                    </p>

                    <h1 className="text-6xl font-bold leading-tight text-slate-800">

                        Discover,
                        Cook &
                        Share
                        Amazing Recipes

                    </h1>

                    <p className="text-gray-600 mt-6 text-lg">

                        Join thousands of home cooks.
                        Find recipes, save your favourites
                        and inspire others with your own dishes.

                    </p>

                    <div className="flex gap-4 mt-10">

                        <Button>

                            Browse Recipes

                        </Button>

                        <Button variant="secondary">

                            Share Recipe

                        </Button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;