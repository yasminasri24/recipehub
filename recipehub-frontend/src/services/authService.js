import api from "./api";

/**
 * Get CSRF cookie before authentication requests.
 */
const getCsrfCookie = async () => {
    return api.get("/sanctum/csrf-cookie");
};

/**
 * Register
 */
export const register = async (data) => {
    await getCsrfCookie();

    return api.post("/api/register", data);
};

/**
 * Login
 */
export const login = async (data) => {
    await getCsrfCookie();

    return api.post("/api/login", data);
};

export const logout = () => {
    return api.post("/api/logout");
};

export const getUser = () => {
    return api.get("/api/user");
};