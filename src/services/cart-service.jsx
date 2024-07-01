import clienteAxios from "../config/axios";

export const addToCart = async (replacement, user) => {
    try {
        const { data } = await clienteAxios.post("/carrito/addCarritoItem", {
            replacement, user
        });
        return data;
    } catch (error) {
        console.error("Error adding product to cart", error);
    }
};

export const getCartItems = async (userId) => {
    try {
        const { data } = await clienteAxios.get(`/carrito/getCarritoItems/${userId}`);
        return data;
    } catch (error) {
        console.error("Error getting cart", error);
        throw error; // Lanza el error para manejarlo donde sea que se esté utilizando getCartItems
    }
};

export const removeProductFromCart = async (carritoItemId, userId) => {
    try {
        const { data } = await clienteAxios.delete(
            `/carrito/deleteCarritoItem/${carritoItemId}/${userId}`
        );
        return data;
    } catch (error) {
        console.error("Error removing product from cart", error);
    }
};

export const createPreference = async (productos, comprador) => {
    try {
        const { data } = await clienteAxios.post("/payment/createOrden", {
            productos,
            comprador,
        });
        return data;
    } catch (error) {
        console.error("Error creating preference", error);
    }
};
