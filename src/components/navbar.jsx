import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import CartContext from "../context/CartProvider";

const NavBar = () => {
    const { auth, cargando, cerrarSesion } = useContext(AuthContext);
    console.log(auth);
    const { cartQuantity } = useContext(CartContext);

    if (cargando) {
        return <div>Cargando...</div>; // O un spinner/loading indicator
    }

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
                        to={"/product"}
                        className="text-white hover:text-gray-300 px-4"
                    >
                        Productos
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

                <div className="flex items-center">
                    <NavLink
                        to={"/cart"}
                        className="text-white hover:text-gray-300 px-4 relative"
                    >
                        <div className="p-2 rounded-full bg-indigo-300 relative">
                            <FaCartPlus />
                            {cartQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full text-xs font-semibold">
                                    {cartQuantity}
                                </span>
                            )}
                        </div>
                    </NavLink>
                    {auth ? (
                        // {auth || Object?.keys(userData)?.length > 0 ? (
                        <div className="flex items-center gap-x-4">
                            <p className="text-white">
                                {auth.name + " " + auth.lastname || userData?.displayName}
                            </p>
                            <button
                                type="button"
                                className="bg-red-500 rounded p-2 text-white hover:text-gray-300 px-4"
                                onClick={cerrarSesion}
                            >
                                Cerrar Sesion
                            </button>
                        </div>
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
