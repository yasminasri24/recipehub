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
                        link: "/categories"
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

                    <CategoryCard emoji="🥞" title="Breakfast" />
                    <CategoryCard emoji="🍛" title="Lunch" />
                    <CategoryCard emoji="🍗" title="Dinner" />
                    <CategoryCard emoji="🍰" title="Dessert" />
                    <CategoryCard emoji="🥤" title="Drinks" />
                    <CategoryCard emoji="🍟" title="Snacks" />

                </div>

            </Container>

        </section>

    );

}

export default CategorySection;