import { useEffect, useState } from "react";
import RecipeGrid from "../../components/recipe/RecipeGrid";
import { getRecipes } from "../../services/recipeService";

function RecipeListPage() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("");
    const [sort, setSort] = useState("latest");
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);


    useEffect(() => {

        loadRecipes();

    }, []);

    const loadRecipes = async () => {

        try {

            const response = await getRecipes({

                search,

                category,

                tag,

                sort,

            });

            setRecipes(response.data.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="text-center py-20">

                Loading recipes...

            </div>

        );

    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold mb-8">

                Browse Recipes

            </h1>

            <RecipeGrid recipes={recipes} />

        </div>

    );

}

export default RecipeListPage;