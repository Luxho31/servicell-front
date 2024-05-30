import React from "react";
import Modal from "../../../shared/modal";

const QuotationModalDashboard = ({ isOpen, onClose, modalContent }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                <h3 className="text-lg font-semibold">Detalles del Repuesto</h3>
                <p><strong>Marca:</strong> {modalContent?.brand}</p>
                <p><strong>Modelo:</strong> {modalContent?.model}</p>
                <p><strong>Problemas Seleccionados:</strong> {modalContent?.selectedProblems}</p>
                <p><strong>Otro Problema:</strong> {modalContent?.otherProblem}</p>
                <p><strong>Descripción del Problema:</strong> {modalContent?.descriptionProblem}</p>
                <p><strong>Nombre:</strong> {modalContent?.name}</p>
                <p><strong>Correo Electrónico:</strong> {modalContent?.email}</p>
                <p><strong>Teléfono:</strong> {modalContent?.phone}</p>
                {/* <img
                    src={modalContent?.foto}
                    alt={modalContent?.nombre}
                    className="h-20 w-20 object-cover mt-2"
                /> */}
            </div>
        </Modal>
    );
};

export default QuotationModalDashboard;
