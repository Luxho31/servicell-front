import clienteAxios from "../config/axios";

export const createQuotation = async (form) => {
    try {
        const { data } = await clienteAxios.post(
            "/cotizaciones/createCotizacion",
            form
        );
        return data;
    } catch (error) {
        console.error("Error creating quotation", error);
    }
};

export const getQuotations = async () => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //     console.error("No token found");
    //     return;
    // }

    const config = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await clienteAxios.get(
            "/cotizaciones/getCotizaciones",
            config
        );
        return data;
    } catch (error) {
        console.error("Error getting quotations", error);
    }
};

export const getQuotation = async (id) => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //     console.error("No token found");
    //     return;
    // }

    const config = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await clienteAxios.get(`/cotizaciones/getCotizacionById/${id}`, config);
        return data;
    } catch (error) {
        console.error("Error getting quotation", error);
    }
};

export const updateQuotation = async (id, form) => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //     console.error("No token found");
    //     return;
    // }

    const config = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await clienteAxios.patch(
            `/cotizaciones/updateCotizacion/${id}`,
            form,
            config
        );
        return data;
    } catch (error) {
        console.error("Error updating quotation", error);
    }
};

export const deleteQuotation = async (id) => {
    try {
        const { data } = await clienteAxios.delete(`/cotizaciones/${id}`);
        return data;
    } catch (error) {
        console.error("Error deleting quotation", error);
    }
};

export const downloadPDFQuotation = async (id, services) => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //     console.error("No token found");
    //     return;
    // }

    const config = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
    };

    try {
        const { data } = await clienteAxios.post(
            `/cotizaciones/invoice/${id}`,
            { services },
            config
        );
        // Crear un link para descargar el archivo
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "cotizacion.pdf");
        document.body.appendChild(link);
        link.click();

        return data;
    } catch (error) {
        console.error("Error downloading quotation", error);
    }
};

export const sendEmail = async (id, file) => {
// export const sendEmail = async (id) => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //     console.error("No token found");
    //     return;
    // }

    const formData = new FormData();
    formData.append("archivo", file);

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${token}`,
        },
        // responseType: "blob",
    };

    try {
        const { data } = await clienteAxios.post(
            `/cotizaciones/send-email/${id}`,
            formData,
            config
        );
        return data;
    } catch (error) {
        console.error("Error sending email", error);
    }
};

// ----------------------------------------------
// Con FETCH

// export const createQuotation = async (quotation) => {
//     try {
//         const response = await fetch(`${API_URL}/cotizaciones`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(quotation),
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error creating quotation", error);
//     }
// };
