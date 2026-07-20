import api from "./api";

// Get Recipe
export const getRecipes = (params = {}) => {
    return api.get("/recipes", {
        params,
    });
};

// Get single recipe
export const getRecipe = (id) => {
    return api.get(`/recipes/${id}`);
};

// Create recipe
export const createRecipe = (data) => {
    return api.post("/recipes", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

// Update recipe
export const updateRecipe = (id, data) => {
    return api.post(`/recipes/${id}?_method=PUT`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

// Delete recipe
export const deleteRecipe = (id) => {
    return api.delete(`/recipes/${id}`);
};