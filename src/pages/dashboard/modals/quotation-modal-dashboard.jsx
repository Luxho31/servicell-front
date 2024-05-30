import React, { useState } from "react";
import Modal from "../../../shared/modal";
import ExportPDFButton from "../../../shared/exportPDFButton";
import QuotationDocument from "../../../shared/quotationDocument";
import Logo from "../../../assets/logo.png";
import { getQuotations, updateQuotation } from "../../../services/quotation-service";

const QuotationModalDashboard = ({ isOpen, onClose, modalContent, handleReload }) => {
    const [services, setServices] = useState(modalContent?.services || []);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        quantity: "",
        price: "",
    });

    // Verificar si modalContent está definido y no es null
    if (!modalContent) {
        return null; // Otra opción es mostrar un mensaje de carga o manejar el caso de modalContent null
    }

    // Verificar si se proporcionan servicios y calcular el precio total si es necesario
    const calculateTotalPrice = () => {
        return services.reduce(
            (total, service) => total + service.price * service.quantity,
            0
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newService = {
            // name: form.name.value,
            name: formData.name,
            description: formData.description,
            quantity: formData.quantity,
            price: formData.price,
        };
        setServices([...services, newService]);
    };

    const changeState = async () => {
        const data = await updateQuotation(modalContent._id, { done: !modalContent.done });
        console.log(data);
        handleReload();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Realizar Cotización">
            <div className="flex gap-x-12">
                <div className="w-full">
                    <h3 className="text-lg font-semibold">
                        Detalles del Repuesto
                    </h3>
                    <p>
                        <strong>Marca:</strong> {modalContent?.brand}
                    </p>
                    <p>
                        <strong>Modelo:</strong> {modalContent?.model}
                    </p>
                    <p>
                        <strong>Problemas Seleccionados:</strong>{" "}
                        {modalContent?.selectedProblems.join(", ")}
                    </p>
                    <p>
                        <strong>Otro Problema:</strong>{" "}
                        {modalContent?.otherProblem}
                    </p>
                    <p>
                        <strong>Descripción del Problema:</strong>{" "}
                        {modalContent?.descriptionProblem}
                    </p>
                    <p>
                        <strong>Nombre:</strong> {modalContent?.name}
                    </p>
                    <p>
                        <strong>Correo Electrónico:</strong>{" "}
                        {modalContent?.email}
                    </p>
                    <p>
                        <strong>Teléfono:</strong> {modalContent?.phone}
                    </p>
                    {/* <img
                    src={modalContent?.foto}
                    alt={modalContent?.nombre}
                    className="h-20 w-20 object-cover mt-2"
                /> */}
                </div>

                <div className="w-full">
                    {/* Formulario para agregar servicios */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col mb-4"
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                placeholder="Nombre del servicio"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Descripción
                            </label>
                            <input
                                type="text"
                                placeholder="Descripción del servicio"
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Nombre completo
                            </label>
                            <input
                                type="number"
                                placeholder="Cantidad"
                                value={formData.quantity}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        quantity: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Nombre completo
                            </label>
                            <input
                                type="number"
                                placeholder="Precio"
                                value={formData.price}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        price: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                step="0.01"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white border rounded-md p-2"
                        >
                            Agregar Servicio
                        </button>
                    </form>

                    {/* Mostrar los servicios agregados */}
                    <h3 className="text-lg font-semibold mb-2">
                        Servicios Agregados
                    </h3>
                    <div className="h-52 mb-8 overflow-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2">
                                        Servicio
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2">
                                        Descripción
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2">
                                        Cantidad
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2">
                                        Precio
                                    </th>
                                </tr>
                            </thead>
                            {services.length > 0 && (
                                <tbody>
                                    {services.map((service, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {service.name}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {service.description}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {service.quantity}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {service.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </table>
                    </div>

                    <ExportPDFButton
                        buttonName="Generar Cotización"
                        document={
                            <QuotationDocument
                                data={modalContent}
                                logo={Logo}
                                companyName="Nombre de la Empresa"
                                services={services}
                                price={calculateTotalPrice()}
                            />
                        }
                    />

                    <button onClick={changeState}>Click</button>
                </div>
            </div>
        </Modal>
    );
};

export default QuotationModalDashboard;

// import React from "react";
// import Modal from "../../../shared/modal";

// const QuotationModalDashboard = ({ isOpen, onClose, modalContent }) => {
//     return (
//         <Modal isOpen={isOpen} onClose={onClose}>
//             <div>
{
    /* <h3 className="text-lg font-semibold">Detalles del Repuesto</h3>
                <p><strong>Marca:</strong> {modalContent?.brand}</p>
                <p><strong>Modelo:</strong> {modalContent?.model}</p>
                <p><strong>Problemas Seleccionados:</strong> {modalContent?.selectedProblems}</p>
                <p><strong>Otro Problema:</strong> {modalContent?.otherProblem}</p>
                <p><strong>Descripción del Problema:</strong> {modalContent?.descriptionProblem}</p>
                <p><strong>Nombre:</strong> {modalContent?.name}</p>
                <p><strong>Correo Electrónico:</strong> {modalContent?.email}</p>
                <p><strong>Teléfono:</strong> {modalContent?.phone}</p> */
}
{
    /* <img
                    src={modalContent?.foto}
                    alt={modalContent?.nombre}
                    className="h-20 w-20 object-cover mt-2"
                /> */
}
//             </div>
//         </Modal>
//     );
// };

// export default QuotationModalDashboard;
