import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getRecipe, deleteRecipe } from "../../services/recipeService";

import RecipeHero from "../../components/Recipe/RecipeHero";
import RecipeIngredients from "../../components/Recipe/RecipeIngredients";
import RecipeSteps from "../../components/Recipe/RecipeSteps";
import RecipeTags from "../../components/Recipe/RecipeTags";
import ConfirmModal from "../../components/Common/ConfirmModal";
import FavoriteButton from "../../components/Recipe/FavoriteButton";

import { useAuth } from "../../contexts/AuthContext";

function RecipeDetailPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { user } = useAuth();

    const [recipe, setRecipe] = useState(null);

    const [loading, setLoading] = useState(true);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {

        fetchRecipe();

    }, []);

    async function fetchRecipe() {

        try {

            const response = await getRecipe(id);

            setRecipe(response.data.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function handleDelete() {

        try {

            await deleteRecipe(recipe.id);

            navigate("/recipes");

        } catch (error) {

            console.error(error);

        }

    }

    if (loading) {

        return (

            <div className="text-center py-20">

                Loading...

            </div>

        );

    }

    if (!recipe) {

        return (

            <div className="text-center py-20">

                Recipe not found.

            </div>

        );

    }

    return (

        <div className="bg-orange-50 min-h-screen">

            <div className="max-w-7xl mx-auto py-10 px-6">

                <RecipeHero recipe={recipe} />

                {/* Action Buttons */}

                {user && user.id === recipe.user_id && (

                    <div className="flex gap-4 mt-8">

                        <FavoriteButton recipe={recipe} />

                        <Link
                            to={`/recipes/${recipe.id}/edit`}
                            className="
                                bg-orange-500
                                hover:bg-orange-600
                                text-white
                                px-5
                                py-2
                                rounded-lg
                            "
                        >

                            Edit Recipe

                        </Link>

                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="
                                bg-red-500
                                hover:bg-red-600
                                text-white
                                px-5
                                py-2
                                rounded-lg
                            "
                        >

                            Delete Recipe

                        </button>

                    </div>

                )}

                {/* Ingredients & Steps */}

                <div className="grid lg:grid-cols-3 gap-8 mt-10">

                    <div>

                        <RecipeIngredients
                            ingredients={recipe.ingredients}
                        />

                    </div>

                    <div className="lg:col-span-2">

                        <RecipeSteps
                            steps={recipe.steps}
                        />

                        <div className="mt-8">

                            <RecipeTags
                                tags={recipe.tags}
                            />

                        </div>

                    </div>

                </div>

            </div>

            <ConfirmModal

                isOpen={showDeleteModal}

                title="Delete Recipe"

                message="Are you sure you want to delete this recipe? This action cannot be undone."

                onConfirm={handleDelete}

                onCancel={() => setShowDeleteModal(false)}

            />

        </div>

    );

}

export default RecipeDetailPage;