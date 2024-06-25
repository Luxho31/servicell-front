import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { createPreference, getCartItems } from "../../../services/cart-service";
import PaymentButton from "../../../shared/paymentButton";
import AuthContext from "../../../context/AuthProvider";

const Cart = () => {
    // const { cartItems, clearCart } = useContext(CartContext);
    const [preferenceId, setPreferenceId] = useState(''); // Agrega el estado preferenceId
    const { removeItemFromCart ,clearCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]); // Cambia el nombre de la variable a cartItems
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const { auth } = useContext(AuthContext);
    console.log(auth);
    const navigate = useNavigate();

    const fetchCartItems = async () => {
        try {
            const items = await getCartItems();
            // console.log(items);
            setCartItems(items);
            setCartTotalPrice(calculateTotalPrice(items));
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    useEffect(() => {
        // loadCartItems();
        fetchCartItems();
    }, []);    

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await removeItemFromCart(itemId);
            fetchCartItems();
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    }

    const handleClearCart = async () => {
        try {
            await clearCart();
            fetchCartItems();
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    }

    // const handleCheckout = () => {
    //     // Aquí deberías integrar el enlace de Mercado Pago
    //     const mercadoPagoLink = 'https://www.mercadopago.com'; // Reemplaza con tu enlace de Mercado Pago
    //     window.location.href = mercadoPagoLink;
    // };

    // // const createPreferenceId = async () => {
    // //     try {
    // //         const items = cartItems.map((item) => ({
    // //             title: item.replacement.model,
    // //             quantity: item.quantity,
    // //             description: item.replacement.description,
    // //             unit_price: item.price,
    // //         }));

    // //         const { preferenceId } = await createPreference(items);
    // //         return preferenceId;
    // //     } catch (error) {
    // //         console.error('Error creating preference:', error);
    // //     }
    // // }

    const handleBuy = async () => {
        try {
            const productos = cartItems.map((item) => ({
                title: item.replacement.model,
                quantity: item.quantity,
                // description: item.replacement.description,
                unit_price: item.price,
            }));

            const comprador = {
                name: auth.name,
                surname: auth.lastname,
                email: auth.email,
            };

            console.log({items:productos, userInfo:comprador});

            const data = await createPreference(productos, comprador);
            console.log(data.id);
            if (!data.id) throw new Error('No se pudo crear la preferencia');
            setPreferenceId(data.id);
        } catch (error) {
            console.error('Error creating preference:', error);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center py-8">
            <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Producto</th>
                        <th className="px-4 py-2">Cantidad</th>
                        <th className="px-4 py-2">Precio Unitario</th>
                        <th className="px-4 py-2">Precio Total</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.replacement.model}</td>
                            <td className="border px-4 py-2">{item.quantity}</td>
                            <td className="border px-4 py-2">S/. {item.price}</td>
                            <td className="border px-4 py-2">S/. {item.price * item.quantity}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleRemoveItem(item._id)}
                                    className="text-red-500 hover:text-red-600"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6 flex justify-between items-center w-full px-4">
                <span className="text-lg font-semibold">Total: S/. {cartTotalPrice}</span>
                <button
                    // onClick={handleCheckout}
                    onClick={handleBuy}
                    className="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                >
                    Pagar
                </button>
                <PaymentButton preferenceId={preferenceId}/>
            </div>
        </div>
    );
};

export default Cart;
