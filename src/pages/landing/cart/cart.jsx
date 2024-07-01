import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { createPreference, getCartItems } from "../../../services/cart-service";
import PaymentButton from "../../../shared/paymentButton";
import AuthContext from "../../../context/AuthProvider";

const Cart = () => {
    // const { cartItems, clearCart } = useContext(CartContext);
    const [preferenceId, setPreferenceId] = useState(''); // Agrega el estado preferenceId
    const { removeItemFromCart, cartItems, cartTotalPrice } = useContext(CartContext);
    const { auth, cargando } = useContext(AuthContext);

    const handleRemoveItem = async (itemId) => {
        try {
            await removeItemFromCart(itemId);
            // fetchCartItems();
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    }

    const handleClearCart = async () => {
        try {
            await clearCart();
            // fetchCartItems();
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

    useEffect(() => {
        handleBuy();
    }, [cartItems]);

    return (
        <div className="min-h-screen flex flex-col items-center py-28">
            <h2 className="text-2xl font-semibold mb-8">Carrito de Compras</h2>
            <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
                    <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-3 text-left">Producto</th>
                                <th className="px-4 py-3 text-left">Cantidad</th>
                                <th className="px-4 py-3 text-left">Precio Unitario</th>
                                <th className="px-4 py-3 text-left">Precio Total</th>
                                <th className="px-4 py-3 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index} className="border-b last:border-b-0">
                                    <td className="border-r px-4 py-3">{item.replacement.model}</td>
                                    <td className="border-r px-4 py-3 text-center">{item.quantity}</td>
                                    <td className="border-r px-4 py-3 text-center">S/. {item.price}</td>
                                    <td className="border-r px-4 py-3 text-center">S/. {item.price * item.quantity}</td>
                                    <td className="px-4 py-3 text-center">
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
                </div>
                <div className="w-full lg:w-1/3 lg:pl-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Resumen de la Compra</h3>
                        <ul className="mb-6">
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between mb-2">
                                    <span>{item.replacement.model} x {item.quantity}</span>
                                    <span>S/. {item.price * item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-4" />
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="text-lg font-semibold">S/. {cartTotalPrice}</span>
                        </div>
                        {/* <div className="flex space-x-4"> */}
                            {/* <button
                                // onClick={handleCheckout}
                                onClick={handleBuy}
                                className="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                            >
                                Pagar
                            </button> */}
                            <PaymentButton preferenceId={preferenceId}/>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Cart;
