import api from "./api";

// Toggle favorite
export const toggleFavorite = (recipeId) => {

    return api.post(`/recipes/${recipeId}/favorite`);

};

// Get user's favorite recipes
export const getFavorites = () => {

    return api.get("/favorites");

};