import clienteAxios from "../config/axios";

export const getInfoUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found");
        return null; // O podrías lanzar un error aquí según tu lógica de manejo de errores
    }

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await clienteAxios.get("/usuarios/getInfoUserByToken", config);
        return response.data; // Devuelve los datos del usuario
    } catch (error) {
        console.error("Error getting user info", error);
        throw error; // Lanza el error para manejarlo donde sea que se esté utilizando getInfoUser
    }
};