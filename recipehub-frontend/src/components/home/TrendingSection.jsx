import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import RecipeCarousel from "../recipe/RecipeCarousel";
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

                <RecipeCarousel recipes={recipes} />

            </Container>

        </section>

    );

}

export default TrendingSection;