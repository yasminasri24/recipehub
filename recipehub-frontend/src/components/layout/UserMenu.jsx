import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function UserMenu() {
    const { user, handleLogout } = useAuth();

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const logout = async () => {

        await handleLogout();

        navigate("/");

    };

    return (
        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2"
            >
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">

                    {user?.name?.charAt(0).toUpperCase()}

                </div>

                <span className="font-medium">

                    {user?.name}

                </span>

            </button>

            {open && (

                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border">

                    <button
                        className="w-full text-left px-4 py-3 hover:bg-gray-100"
                    >
                        Profile
                    </button>

                    <button
                        className="w-full text-left px-4 py-3 hover:bg-gray-100"
                    >
                        My Recipes
                    </button>

                    <button
                        className="w-full text-left px-4 py-3 hover:bg-gray-100"
                    >
                        Favorites
                    </button>

                    <hr />

                    <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                        Logout
                    </button>

                </div>

            )}

        </div>
    );
}

export default UserMenu;