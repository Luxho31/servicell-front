import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import CartContext from "../context/CartProvider";

const ProductModal = ({ isOpen, onClose, product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { auth } = useContext(AuthContext);

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
            if (!auth || !auth._id) {
                console.error("User is not authenticated");
                return;
            }
            console.log({ id_product: product._id, id_user: auth._id });
            await addItemToCart(product._id, auth._id); // Agregar al carrito con el ID de repuesto y usuario
            onClose(); // Cerrar el modal después de agregar al carrito
        } catch (error) {
            console.error("Error adding product to cart", error);
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className={`bg-white rounded-lg shadow-lg p-6 w-1/2 transform transition-transform duration-300 ${isOpen ? "scale-100" : "scale-90"
                    }`}
            >
                <div className="flex justify-between items-center mb-4">
                    {/* <h2 className="text-xl font-semibold">{product.model}</h2> */}
                    <h2 className="text-xl font-semibold"></h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>
                <div className="flex gap-x-4">
                    <img
                        className="w-96 mb-4"
                        src={product.image_url}
                        alt={product.model}
                    />
                    <div className="w-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-md font-semibold text-gray-400">{product.brand}</h3>
                            <h2 className="text-2xl font-semibold">{product.model}</h2>
                            <p className="text-gray-700 mb-4">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-900 font-bold">
                                    S/. {product.price}
                                </span>
                                <span className="text-gray-700">
                                    Stock: {product.stock}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
