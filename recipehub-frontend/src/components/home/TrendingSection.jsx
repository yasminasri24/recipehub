import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import RecipeCard from "../recipe/RecipeCard";

function TrendingSection() {

    return (

        <section className="py-20">

            <Container>

                <SectionHeader
                    title="🔥 Trending Recipes"
                    subtitle="Popular recipes loved by the community."
                />

                <div
                    className="
                        flex
                        gap-6
                        overflow-x-auto
                        pb-4
                    "
                >

                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />

                </div>

            </Container>

        </section>

    );

}

export default TrendingSection;