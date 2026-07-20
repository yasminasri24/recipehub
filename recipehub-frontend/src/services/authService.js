import api from "./api";


// Login
export const login = async (data) => {

    const response = await api.post(
        "/login",
        data
    );


    localStorage.setItem(
        "token",
        response.data.token
    );


    return response;

};



// Register
export const register = async (data) => {

    const response = await api.post(
        "/register",
        data
    );


    localStorage.setItem(
        "token",
        response.data.token
    );


    return response;

};



// Logout
export const logout = async () => {

    const response = await api.post(
        "/logout"
    );
    
    localStorage.removeItem(
        "token"
    );

    return response;

};


// Get user
export const getUser = () => {

    return api.get("/user");

};