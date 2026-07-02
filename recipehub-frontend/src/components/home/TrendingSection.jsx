import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import RecipeCard from "../recipe/RecipeCard";
import recipes from "../../data/recipes";

function TrendingSection() {

    return (

        <section className="py-20">

            <Container>

                <SectionHeader
                    title="🔥 Trending Recipes"
                    subtitle="Discover the most popular recipes shared by the community."
                    action={{
                        label: "View All",
                        link: "/recipes"
                    }}
                />

                <div className="flex gap-6 overflow-x-auto pb-4">

                    {

                        recipes.map(recipe => (

                            <div
                                key={recipe.id}
                                className="min-w-80"
                            >

                                <RecipeCard recipe={recipe} />

                            </div>

                        ))

                    }

                </div>

            </Container>

        </section>

    );

}

export default TrendingSection;