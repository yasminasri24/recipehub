import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes = [] }) {

    return (

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {recipes.map(recipe => (

                <RecipeCard

                    key={recipe.id}

                    recipe={recipe}

                />

            ))}

        </div>

    );

}

export default RecipeGrid;