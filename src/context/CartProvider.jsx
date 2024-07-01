import React, { createContext, useContext, useEffect, useState } from 'react';
import { addToCart, getCartItems, removeProductFromCart } from '../services/cart-service';
import AuthContext from './AuthProvider';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { auth } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    // console.log(auth.id)

    const fetchCartItems = async () => {
        try {
            // console.log(auth.id)
            // const userId = auth.id;
            if (auth) {
                const data = await getCartItems(auth._id);
                setCartItems(data);
                setCartQuantity(data.reduce((total, item) => total + item.quantity, 0));
                // setCartQuantity(data.length);
            } else {
                setCartItems([]);
                setCartQuantity(0);
            }
        } catch (error) {
            console.error("Error fetching cart items", error);
        }
    };

    const addItemToCart = async (replacement, user) => {
        try {
            await addToCart(replacement, user);
            fetchCartItems();
        } catch (error) {
            console.error("Error adding product to cart", error);
        }
    };
    // const addItemToCart = async (replacement) => {
    //     try {
    //         await addToCart(replacement, auth._id);
    //         fetchCartItems();
    //     } catch (error) {
    //         console.error("Error adding product to cart", error);
    //     }
    // };

    const removeItemFromCart = async (carritoItemId) => {
        try {
            await removeProductFromCart(carritoItemId, auth._id);
            // setCartItems(cartItems.filter(item => item._id !== carritoItemId));
            fetchCartItems();
        } catch (error) {
            console.error("Error removing product from cart", error);
        }
    };

    // const clearCart = async () => {
    //     try {
    //         await clienteAxios.delete(`/carrito/clearCarritoItems/${getUserId()}`);
    //         setCartItems([]);
    //         setCartQuantity(0);
    //     } catch (error) {
    //         console.error("Error clearing cart", error);
    //     }
    // };

    useEffect(() => {
        fetchCartItems();
    }, [auth]);

    const cartTotalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart, removeItemFromCart, cartTotalPrice, fetchCartItems, cartQuantity }}>
            {children}
        </CartContext.Provider>
    );

};

export { CartProvider };

export default CartContext;