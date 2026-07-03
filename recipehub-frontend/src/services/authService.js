import api from "./api";

// Login user
export const login = (data) => {
    return api.post("/login", data);
};

// Register user
export const register = (data) => {
    return api.post("/register", data);
};

// Logout user
export const logout = () => {
    return api.post("/logout");
};

// Get authenticated user
export const getUser = () => {
    return api.get("/user");
};