import React, { useEffect, useState } from "react";
// import { FaEdit, FaSignOutAlt } from "react-icons/fa";
// import UserEditModal from "./UserEditModal";
import { FaSave, FaTimes } from "react-icons/fa";

const ProfileDashboard = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        profilePicture: "", // URL de la imagen del perfil
    });

    useEffect(() => {
        // Simulamos la carga de datos del usuario al iniciar sesión
        const loggedUser = {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: "123 Main St, City, Country",
            profilePicture: "https://via.placeholder.com/150", // URL de ejemplo para la imagen
        };
        setUser(loggedUser);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se manejaría la lógica para guardar los cambios en el perfil
        console.log("Perfil actualizado:", user);
    };

    const handleCancel = () => {
        setUser(originalUser); // Restablecemos los datos originales
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Perfil de Usuario</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center mb-6 md:col-span-2">
                    <img
                        src={user.profilePicture}
                        alt="Profile"
                        className="rounded-full h-32 w-32 object-cover mb-4"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
                        URL de la Imagen del Perfil
                    </label>
                    <input
                        type="text"
                        name="profilePicture"
                        value={user.profilePicture}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Teléfono
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        Dirección
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        <FaSave className="inline-block mr-2" />
                        Guardar Cambios
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        <FaTimes className="inline-block mr-2" />
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileDashboard;
