import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, profile } from "../services/auth-service";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const autenticarUsuario = async () => {
            try {
                const data = await profile();
                setAuth(data);
            } catch (error) {
                console.error("Error autenticando usuario:", error.response?.data?.msg || error.message);
                setAuth(null);
            }

            setCargando(false);
        };

        autenticarUsuario();
    }, []);

    //TODO: Pasar todos los endpoints de autenticación del backend
    /*
    * Pasar el Login
    * Pasar el register
    */

    const cerrarSesion = () => {
        logout();
        setAuth(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, cerrarSesion, cargando }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };

export default AuthContext;
