import React, { useState } from "react";
import { deleteReplacement } from "../services/replacement-service";

const DeleteReplacementModal = ({ isOpen, onClose, modalContent, handleReload }) => {
    const deleteRepuesto = async () => {
        const id = modalContent?._id;
        await deleteReplacement(id);
        handleReload();
        onClose();
    };
    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                // className={`bg-white rounded-lg shadow-lg p-6 w-[80%] transform transition-transform duration-300 ${
                className={`bg-white rounded-lg shadow-lg p-6 w-1/3 transform transition-transform duration-300 ${
                    isOpen ? "scale-100" : "scale-90"
                }`}
            >
                <h2 className="text-xl font-semibold mb-4">Eliminar Repuesto</h2>
                <p>¿Seguro que desea eliminar este repuesto?</p>
                <p>Una vez eliminado, no se podrá recuperar.</p>
                <p>¿Desea continuar?</p>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white rounded-md p-2 mr-2"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={deleteRepuesto}
                        className="bg-indigo-500 text-white rounded-md p-2"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteReplacementModal;
