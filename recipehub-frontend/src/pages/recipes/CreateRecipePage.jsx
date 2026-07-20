import { useNavigate } from "react-router-dom";
import RecipeForm from "../../components/recipe/RecipeForm";
import { createRecipe } from "../../services/recipeService";

function CreateRecipePage() {

    const navigate = useNavigate();
    const handleSubmit = async (form) => {
        
        try {
            const formData = new FormData();
            formData.append(
                "title",
                form.title
            );

            formData.append(
                "description",
                form.description
            );

            formData.append(
                "category_id",
                form.category_id
            );

            formData.append(
                "cooking_time",
                form.cooking_time
            );

            formData.append(
                "servings",
                form.servings
            );

            formData.append(
                "difficulty",
                form.difficulty
            );

            if(form.image) {

                formData.append(
                    "image",
                    form.image
                );

            }

            /*
            *
            * Ingredients
            *
            */
            form.ingredients.forEach(
                (ingredient, index) => {
                    formData.append(
                        `ingredients[${index}][ingredient]`,
                        ingredient.ingredient
                    );

                    formData.append(
                        `ingredients[${index}][quantity]`,
                        ingredient.quantity
                    );


                }
            );

            /*
            *
            * Steps
            *
            */
            form.steps.forEach(
                (step,index)=>{
                    formData.append(
                        `steps[${index}][instruction]`,
                        step.instruction
                    );
                }
            );

            /*
            *
            * Tags
            *
            */
            form.tags.forEach(
                (tag,index)=>{
                    formData.append(
                        `tags[${index}]`,
                        tag
                    );
                }
            );

            await createRecipe(formData);

            alert(
                "Recipe created successfully!"
            );

            navigate("/recipes");

        }

        catch(error) {
            console.log(error.response.data);
            alert(
                "Failed to create recipe"
            );

        }

    };

    return (

        <div className="
            bg-orange-50
            min-h-screen
            py-10
        ">

            <div className="
                max-w-4xl
                mx-auto
                bg-white
                rounded-3xl
                shadow-md
                p-8
            ">

                <h1 className="
                    text-4xl
                    font-bold
                    mb-8
                ">

                    Create Recipe

                </h1>
                <RecipeForm
                    onSubmit={handleSubmit}
                />

            </div>

        </div>

    );

}

export default CreateRecipePage;