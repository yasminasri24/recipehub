import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import RecipeForm from "../../components/recipe/RecipeForm";

import {
    getRecipe,
    updateRecipe,
} from "../../services/recipeService";

function EditRecipePage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [recipe, setRecipe] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchRecipe();

    }, []);

    async function fetchRecipe() {

        try {

            const response = await getRecipe(id);

            setRecipe(response.data.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    }

    async function handleUpdate(form) {

        try {

            const formData = new FormData();

            Object.keys(form).forEach(key => {

                if (key === "ingredients") {

                    form.ingredients.forEach((item, index) => {

                        formData.append(
                            `ingredients[${index}][ingredient]`,
                            item.ingredient
                        );

                        formData.append(
                            `ingredients[${index}][quantity]`,
                            item.quantity
                        );

                    });

                }

                else if (key === "steps") {

                    form.steps.forEach((step, index) => {

                        formData.append(
                            `steps[${index}][instruction]`,
                            step.instruction
                        );

                    });

                }

                else if (key === "tags") {

                    form.tags.forEach(tag => {

                        formData.append(
                            "tags[]",
                            tag
                        );

                    });

                }

                else {

                    formData.append(
                        key,
                        form[key]
                    );

                }

            });

            await updateRecipe(id, formData);

            navigate(`/recipes/${id}`);

        }

        catch (error) {

            console.log(error);

        }

    }

    if (loading)

        return <div>Loading...</div>;

    return (

        <div className="max-w-5xl mx-auto py-10 px-6">

            <h1 className="text-4xl font-bold mb-8">

                Edit Recipe

            </h1>

            <RecipeForm

                initialData={recipe}

                onSubmit={handleUpdate}

            />

        </div>

    );

}

export default EditRecipePage;