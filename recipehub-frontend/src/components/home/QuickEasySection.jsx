import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import RecipeCarousel from "../recipe/RecipeCarousel";
import recipes from "../../data/recipes";

function QuickEasySection() {

    return (

        <section className="py-20">

            <Container>

                <SectionHeader
                    title="⚡ Quick & Easy"
                    subtitle="Recipes ready in under 30 minutes."
                    action={{
                        label: "View All",
                        link: "/recipes",
                    }}
                />

                <RecipeCarousel recipes={recipes} />

            </Container>

        </section>

    );

}

export default QuickEasySection;