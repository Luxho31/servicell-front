import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const AuthLayout = () => {
    const { auth, cargando } = useContext(AuthContext);

    if (cargando) return "Cargando...";

    return auth ? <Navigate to="/" /> : <Outlet />;
};

export default AuthLayout;
