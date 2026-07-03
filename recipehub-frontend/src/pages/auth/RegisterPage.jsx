import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useAuth } from "../../contexts/AuthContext";

function RegisterPage() {

    const { handleRegister } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        await handleRegister(form);
        navigate("/");
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Join RecipeHub community"
        >
            <form onSubmit={submit}>

                <Input
                    label="Name"
                    name="name"
                    onChange={handleChange}
                />

                <Input
                    label="Username"
                    name="username"
                    onChange={handleChange}
                />

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                />

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                />

                <Input
                    label="Confirm Password"
                    name="password_confirmation"
                    type="password"
                    onChange={handleChange}
                />

                <Button className="w-full mt-2">
                    Register
                </Button>

            </form>

            <p className="text-center mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-green-600 font-semibold">
                    Login
                </Link>
            </p>
        </AuthLayout>
    );
}

export default RegisterPage;