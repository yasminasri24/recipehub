import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useAuth } from "../../contexts/AuthContext";

function LoginPage() {

    const { handleLogin } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        await handleLogin(form);
        navigate("/");
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to your RecipeHub account"
        >
            <form onSubmit={submit}>

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                />

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />

                <Button className="w-full mt-2">
                    Login
                </Button>

            </form>

            <p className="text-center mt-6">
                Don't have an account?{" "}
                <Link to="/register" className="text-green-600 font-semibold">
                    Register
                </Link>
            </p>
        </AuthLayout>
    );
}

export default LoginPage;