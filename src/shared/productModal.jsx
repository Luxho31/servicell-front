import React, { useContext, useEffect } from "react";
import CartContext from "../context/CartProvider";
import { getInfoUser } from "../services/user-service";

const ProductModal = ({ isOpen, onClose, product }) => {
    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!product) return null;

    const handleAddToCart = async () => {
        try {
            const userId = await getInfoUser(); // Obtener el ID de usuario
            await addItemToCart(product._id, userId); // Agregar al carrito con el ID de repuesto y usuario
            onClose(); // Cerrar el modal después de agregar al carrito
        } catch (error) {
            console.error("Error adding product to cart", error);
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`bg-white rounded-lg shadow-lg p-6 w-1/3 transform transition-transform duration-300 ${
                    isOpen ? "scale-100" : "scale-90"
                }`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{product.model}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>
                <img className="w-full mb-4" src={product.image} alt={product.model} />
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">S/. {product.price}</span>
                    <span className="text-gray-700">Stock: {product.stock}</span>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ProductModal;
