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
        try {
            const res = await getUser();
            setUser(res.data.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (data) => {
        try {

            setError(null);

            await login(data);

            await fetchUser();

        } catch (err) {

            setError(
                err.response?.data?.message ??
                "Login failed."
            );

            throw err;
        }
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

            setUser(null);
            setError(null);

        } catch (err) {
            console.error(err);
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