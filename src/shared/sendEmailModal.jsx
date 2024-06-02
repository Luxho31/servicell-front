import React, { useState } from "react";

const SendEmailModal = ({ isOpen, onClose, email, handleSendEmail }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const onSendEmail = async () => {
        if (selectedFile) {
            await handleSendEmail(selectedFile);
            setSelectedFile(null);
        } else {
            console.error("No file selected");
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`bg-white rounded-lg shadow-lg p-6 w-[80%] transform transition-transform duration-300 ${
                    isOpen ? "scale-100" : "scale-90"
                }`}
            >
                <h2 className="text-xl font-semibold mb-4">Confirmar Envío</h2>
                <p>¿Desea enviar la cotización a {email}?</p>
                <p>Una vez enviado, no se podrá modificar la cotización.</p>
                <p>¿Desea continuar?</p>
                <form>
                    <input
                        type="file"
                        name="archivo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                </form>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white rounded-md p-2 mr-2"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onSendEmail}
                        className="bg-indigo-500 text-white rounded-md p-2"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SendEmailModal;
