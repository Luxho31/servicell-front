import clienteAxios from "../config/axios";

const signUp = async (form) => {
    try {
        const { data } = await clienteAxios.post("/auth/register", form);
        return data;
    } catch (error) {
        console.error("Error al registrarse:", error);
    }
};

const signIn = async (form) => {
    try {
        const { data } = await clienteAxios.post("/auth/login", form);
        return data;
    } catch (error) {
        console.error("Error al loguearse:", error);
    }
};

const logout = async () => {
    try {
        const { data } = await clienteAxios.post("/auth/logout");
        return data;
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
};

const profile = async () => {
    try {
        const { data } = await clienteAxios.get("/auth/profile");
        return data;
    } catch (error) {
        console.error("Error al obtener el perfil:", error);
    }
};

export { logout, profile, signIn, signUp };
