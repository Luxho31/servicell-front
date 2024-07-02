import clienteAxios from "../config/axios";

const createReplacement = async (replacement) => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found");
        return;
    }

    const config = {
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await clienteAxios.post(
            "/repuestos/createRepuesto",
            replacement,
            config
        );
        return data;
    } catch (error) {
        console.error("Error creating replacement", error);
    }
};

// const getReplacements = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//         console.error("No token found");
//         return;
//     }

//     const config = {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//     };

//     try {
//         const { data } = await clienteAxios.get(
//             "/repuestos/getRepuestos",
//             config
//         );
//         return data;
//     } catch (error) {
//         console.error("Error getting replacements", error);
//     }
// };

// const getReplacement = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//         console.error("No token found");
//         return;
//     }

//     const config = {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//     };

//     try {
//         const { data } = await clienteAxios.get(
//             `/repuesto/getRepuestoById/${id}`,
//             config
//         );
//         return data;
//     } catch (error) {
//         console.error("Error getting replacement", error);
//     }
// };
const getReplacements = async () => {
    try {
        const { data } = await clienteAxios.get(
            "/repuestos/getRepuestos"
        );
        return data;
    } catch (error) {
        console.error("Error getting replacements", error);
    }
};

const getReplacement = async (id) => {
    try {
        const { data } = await clienteAxios.get(
            `/repuesto/getRepuestoById/${id}`
        );
        return data;
    } catch (error) {
        console.error("Error getting replacement", error);
    }
};

const updateReplacement = async (id, replacement) => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found");
        return;
    }

    const config = {
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await clienteAxios.patch(
            `/repuestos/updateRepuesto/${id}`,
            replacement,
            config
        );
        return data;
    } catch (error) {
        console.error("Error updating replacement", error);
    }
};

const deleteReplacement = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found");
        return;
    }

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await clienteAxios.delete(
            `/repuestos/deleteRepuesto/${id}`,
            config
        );
        return data;
    } catch (error) {
        console.error("Error deleting replacement", error);
    }
};

export {
    createReplacement,
    getReplacements,
    getReplacement,
    updateReplacement,
    deleteReplacement,
};
