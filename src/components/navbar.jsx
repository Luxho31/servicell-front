import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const NavBar = () => {
    const { auth, cerrarSesion } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-50">
            <div className="w-[90%] flex justify-between items-center m-auto">
                <NavLink to={"/"} className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 mr-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <h1 className="text-white text-lg font-semibold">
                        Servicell -- KDC
                    </h1>
                </NavLink>

                <div className="flex justify-center">
                    <NavLink
                        to={"/"}
                        className="text-white hover:text-gray-300 px-4"
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to={"/quotation"}
                        className="text-white hover:text-gray-300 px-4"
                    >
                        Cotización
                    </NavLink>
                    <NavLink
                        to={"/contact"}
                        className="text-white hover:text-gray-300 px-4"
                    >
                        Contacto
                    </NavLink>
                    <NavLink
                        to={"/about"}
                        className="text-white hover:text-gray-300 px-4"
                    >
                        Sobre Nosotros
                    </NavLink>
                    {auth && (
                        <NavLink
                            to={"/dashboard"}
                            className="text-white hover:text-gray-300 px-4"
                        >
                            Dashboard
                        </NavLink>
                    )}
                </div>

                <div>
                    {auth ? (
                        <button
                            type="button"
                            className="text-white hover:text-gray-300 px-4"
                            onClick={cerrarSesion}
                        >
                            Cerrar Sesion
                        </button>
                    ) : (
                        <NavLink
                            to={"login"}
                            className="bg-indigo-500 text-white rounded-lg px-6 py-2 hover:bg-indigo-600"
                        >
                            Acceder
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
