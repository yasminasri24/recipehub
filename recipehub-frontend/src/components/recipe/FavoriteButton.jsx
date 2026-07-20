import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleFavorite } from "../../services/favoriteService";

function FavoriteButton({
    recipe,
    onFavoriteChanged,
}) {

    const [favorited, setFavorited] = useState(
        recipe.is_favorited
    );

    const [count, setCount] = useState(
        recipe.favorites_count
    );

    const [loading, setLoading] = useState(false);


    useEffect(() => {

        setFavorited(recipe.is_favorited);
        setCount(recipe.favorites_count);

    }, [recipe]);


    async function handleClick() {
        if (loading) return;
        try {
            setLoading(true);

            const response = await toggleFavorite(recipe.id);
            const data = response.data.data;
            setFavorited(data.is_favorited);
            setCount(data.favorites_count);

            if (onFavoriteChanged) {
                onFavoriteChanged();
            }
        }

        catch (error) {
            console.error(
                "Favorite error:",
                error
            );
        }

        finally {
            setLoading(false);
        }
    }


    return (

        <button
            onClick={handleClick}
            disabled={loading}
            className="
                flex
                items-center
                gap-2
                text-red-500
                hover:text-red-600
                transition
                disabled:opacity-50
            "
        >
            {
                favorited
                    ? <FaHeart size={22} />
                    : <FaRegHeart size={22} />
            }
            <span>
                {count}
            </span>
        </button>
    );

}

export default FavoriteButton;