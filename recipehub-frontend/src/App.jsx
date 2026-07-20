import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import RecipeListPage from "./pages/recipes/RecipeListPage";
import RecipeDetailPage from "./pages/recipes/RecipeDetailPage";
import CreateRecipePage from "./pages/recipes/CreateRecipePage";
import EditRecipePage from "./pages/recipes/EditRecipePage";
import FavoritesPage from "./pages/Favorite/FavoritesPage";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<HomePage />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/register"
                element={<RegisterPage />}
            />

            <Route
                path="/recipes"
                element={<RecipeListPage />}
            />

            <Route
                path="/recipes/:id"
                element={<RecipeDetailPage />}
            />

            <Route
                path="/recipes/create"
                element={<CreateRecipePage />}
            />

            <Route
                path="/recipes/:id/edit"
                element={<EditRecipePage />}
            />

            <Route
                path="/favorites"
                element={<FavoritesPage />}
            />

        </Routes>

    );

}

export default App;