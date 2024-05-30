import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
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

    // Al hacer click en el fondo del modal, se cierra el modal
    // const handleBackgroundClick = (event) => {
    //     if (event.target === event.currentTarget) {
    //         onClose();
    //     }
    // };

    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            // onClick={handleBackgroundClick}
        >
            <div
                className={`bg-white rounded-lg shadow-lg p-6 w-[80%] transform transition-transform duration-300 ${
                    isOpen ? "scale-100" : "scale-90"
                }`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
