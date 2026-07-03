import Button from "../common/Button";
import Container from "../common/Container";

function BecomeCreatorSection() {

    return (

        <section className="py-24 bg-green-600 text-white">

            <Container>

                <div className="text-center">

                    <h2 className="text-5xl font-bold">

                        Become a Recipe Creator

                    </h2>

                    <p className="mt-6 text-lg max-w-2xl mx-auto">

                        Share your favourite recipes, inspire thousands of
                        home cooks and become part of the RecipeHub community.

                    </p>

                    <div className="mt-10">

                        <Button variant="secondary">

                            Share Your Recipe

                        </Button>

                    </div>

                </div>

            </Container>

        </section>

    );

}

export default BecomeCreatorSection;