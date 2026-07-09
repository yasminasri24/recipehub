import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function GuestRoute({ children }) {

    const {

        loading,

        isAuthenticated

    } = useAuth();

    if (loading) {

        return <p>Loading...</p>;

    }

    if (isAuthenticated) {

        return <Navigate to="/" replace />;

    }

    return children;

}

export default GuestRoute;