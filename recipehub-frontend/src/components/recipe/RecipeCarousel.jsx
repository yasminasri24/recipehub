import RecipeCard from "./RecipeCard";

function RecipeCarousel({ recipes }) {
    return (
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

            {recipes.map((recipe) => (

                <div
                    key={recipe.id}
                    className="min-w-[320px] max-w-[320px] flex-shrink-0"
                >

                    <RecipeCard recipe={recipe} />

                </div>

            ))}

        </div>
    );
}

export default RecipeCarousel;