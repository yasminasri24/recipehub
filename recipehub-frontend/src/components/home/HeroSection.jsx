import Button from "../common/Button";
import Container from "../common/Container";
import SearchBar from "../common/SearchBar";

function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-green-50 to-green-100">
            <Container>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>

                        <p className="text-green-600 font-semibold mb-3">
                            Welcome to RecipeHub 👋
                        </p>

                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-800">

                            Discover,
                            <br />

                            Cook &
                            <br />

                            Share Amazing Recipes

                        </h1>

                        <p className="text-gray-600 text-lg mt-6 leading-8">

                            Find thousands of delicious recipes shared by
                            home cooks around the world. Save your favourite
                            recipes, share your own creations and cook
                            something amazing today.

                        </p>

                        {/* Search Bar */}

                        <div className="mt-8">
                            <SearchBar />
                        </div>

                        {/* Popular Tags */}

                        <div className="flex flex-wrap gap-3 mt-6">

                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full cursor-pointer hover:bg-green-200 transition">
                                Healthy
                            </span>

                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full cursor-pointer hover:bg-green-200 transition">
                                Chicken
                            </span>

                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full cursor-pointer hover:bg-green-200 transition">
                                Pasta
                            </span>

                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full cursor-pointer hover:bg-green-200 transition">
                                Dessert
                            </span>

                        </div>

                        {/* CTA Buttons */}

                        <div className="flex flex-wrap gap-4 mt-8">

                            <Button>
                                Browse Recipes
                            </Button>

                            <Button variant="secondary">
                                Share Recipe
                            </Button>

                        </div>

                        {/* Statistics */}

                        <div className="flex flex-wrap gap-10 mt-14">

                            <div>

                                <h2 className="text-3xl font-bold text-slate-800">
                                    2,000+
                                </h2>

                                <p className="text-gray-500">
                                    Recipes
                                </p>

                            </div>

                            <div>

                                <h2 className="text-3xl font-bold text-slate-800">
                                    500+
                                </h2>

                                <p className="text-gray-500">
                                    Active Cooks
                                </p>

                            </div>

                            <div>

                                <h2 className="text-3xl font-bold text-slate-800">
                                    8,000+
                                </h2>

                                <p className="text-gray-500">
                                    Reviews
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right Content */}

                    <div className="flex justify-center">

                        <img
                            src="https://placehold.co/700x700"
                            alt="RecipeHub Hero"
                            className="w-full max-w-xl rounded-3xl shadow-2xl"
                        />

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default HeroSection;