import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import RecipeCarousel from "../recipe/RecipeCarousel";
import recipes from "../../data/recipes";

function HealthySection() {

    return (

        <section className="py-20 bg-gray-50">

            <Container>

                <SectionHeader
                    title="🥗 Healthy Choices"
                    subtitle="Nutritious recipes for a healthier lifestyle."
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

export default HealthySection;