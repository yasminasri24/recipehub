import { useEffect, useState } from "react";

import RecipeCard from "../../components/Recipe/RecipeCard";

import { getFavorites } from "../../services/favoriteService";

function FavoritesPage() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        loadFavorites();

    }, []);

    async function loadFavorites() {

        try {

            const response = await getFavorites();

            setRecipes(response.data.data);

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <div className="max-w-7xl mx-auto py-10 px-6">

            <h1 className="text-4xl font-bold mb-8">

                My Favorite Recipes

            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {

                    recipes.map(recipe => (

                        <RecipeCard

                            key={recipe.id}

                            recipe={recipe}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default FavoritesPage;