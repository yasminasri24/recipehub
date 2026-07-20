import { createContext, useContext, useEffect, useState } from "react";
import { login, register, logout, getUser } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // load user on app start
    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {

        const token = localStorage.getItem("token");
        if(!token){
            setUser(null);
            setLoading(false);
            return;
        }

        try {
            const res = await getUser();
            setUser(res.data.data);
        }
        catch(error){
            localStorage.removeItem("token");
            setUser(null);
        }

        finally{
            setLoading(false);
        }

    };

    const handleLogin = async (data) => {

        const response = await login(data);

        localStorage.setItem(
            "token",
            response.data.data.token
        );

        await fetchUser();
    };

    const handleRegister = async (data) => {
        try {

            setError(null);

            await register(data);

            await fetchUser();

        } catch (err) {

            setError(
                err.response?.data?.message ??
                "Registration failed."
            );

            throw err;
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        }
        catch(error){

            console.log(
                "Logout API failed",
                error
            );

        }

        finally{
            localStorage.removeItem("token");
            setUser(null);
        }

    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                handleLogin,
                handleRegister,
                handleLogout,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { useAuth };