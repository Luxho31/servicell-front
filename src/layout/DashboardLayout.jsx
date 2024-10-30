import { useContext, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaBoxOpen, FaFileAlt, FaTools } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const sidebarItems = [
    {
        itemName: "Inicio",
        path: "/dashboard",
        icon: <AiFillHome className="text-xl" />,
    },
    {
        itemName: "Marcas",
        path: "/dashboard/brand",
        icon: <IoMdPricetags className="text-xl" />,
    },
    {
        itemName: "Repuestos",
        path: "/dashboard/replacement",
        icon: <FaTools className="text-xl" />,
    },
    {
        itemName: "Cotizaciones",
        path: "/dashboard/quotation",
        icon: <FaFileAlt className="text-xl" />,
    },
    {
        itemName: "Inventario",
        path: "/dashboard/inventory",
        icon: <FaBoxOpen className="text-xl" />,
    },
    {
        itemName: "Perfil",
        path: "/dashboard/profile",
        icon: <FaBoxOpen className="text-xl" />,
    },
];

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { auth, cargando } = useContext(AuthContext);
    const [hoveredItem, setHoveredItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cargando && !auth) {
            navigate("/login", { replace: true });
        }
    }, [auth, cargando, navigate]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleItemClick = (path) => {
        navigate(path);
    };

    if (cargando) {
        return <div>Loading...</div>; // O un spinner o cualquier componente de carga
    }

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white flex flex-col gap-y-8 ease-in duration-200 ${
                    isSidebarOpen ? "w-64" : "w-16"
                }`}
            >
                {isSidebarOpen ? (
                    <NavLink to={"/"} className="p-4 flex items-center">
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
                        <h2 className="text-lg font-semibold">
                            Servicell -- KDC
                        </h2>
                    </NavLink>
                ) : (
                    <div className="py-4 px-3">
                        <NavLink to={"/"}>
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
                        </NavLink>
                    </div>
                )}
                <ul className="flex flex-col gap-y-4">
                    {sidebarItems.map((item, index) => (
                        <li
                            key={index}
                            className={`p-4 hover:bg-gray-700 cursor-pointer flex items-center ${
                                isSidebarOpen
                                    ? "justify-start"
                                    : "justify-center"
                            } gap-x-2`}
                            onClick={() => handleItemClick(item.path)}
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {item.icon}
                            {isSidebarOpen && item.itemName}
                            {!isSidebarOpen && hoveredItem === index && (
                                <span className="absolute left-[4.5rem] bg-gray-700 text-white p-1 rounded shadow-md">
                                    {item.itemName}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contenido */}
            <div className="flex-grow flex flex-col">
                {/* Barra superior */}
                <div className="bg-gray-900 p-4 flex justify-between items-center">
                    <button className="text-white" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <h1 className="text-white text-xl font-bold">
                        Mi Dashboard
                    </h1>
                    <div></div>
                </div>

                {/* Contenido del dashboard */}
                <div className="p-8 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
