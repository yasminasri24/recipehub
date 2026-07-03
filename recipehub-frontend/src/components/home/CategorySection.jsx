import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import CategoryCard from "./CategoryCard";

function CategorySection() {

    return (

        <section className="py-20 bg-white">

            <Container>

                <SectionHeader
                    title="🍽 Browse Categories"
                    subtitle="Explore recipes by category."
                    action={{
                        label: "View All",
                        link: "/recipes",
                    }}
                />

                <div
                    className="
                        flex
                        gap-5
                        overflow-x-auto
                        pb-4
                    "
                >

                    <CategoryCard emoji="🥞" title="Breakfast" recipes={124} />
                    <CategoryCard emoji="🍛" title="Lunch" recipes={98} />
                    <CategoryCard emoji="🍗" title="Dinner" recipes={156} />
                    <CategoryCard emoji="🍰" title="Dessert" recipes={87} />
                    <CategoryCard emoji="🥤" title="Drinks" recipes={65} />
                    <CategoryCard emoji="🍟" title="Snacks" recipes={43} />

                </div>

            </Container>

        </section>

    );

}

export default CategorySection;