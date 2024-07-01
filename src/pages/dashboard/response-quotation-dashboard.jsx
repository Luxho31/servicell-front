import React, { useEffect, useState } from "react";
import SendEmailModal from "../../shared/sendEmailModal";
import ExportPDFButton from "../../shared/exportPDFButton";
import Modal from "../../shared/modal";
import { useNavigate, useParams } from "react-router-dom";
import { getQuotation, sendEmail, updateQuotation } from "../../services/quotation-service";

const ResponseQuotationDashboard = (
    isOpen,
    onClose,
    // modalContent,
    handleReload
    // openSendEmailModal,
) => {
    const [services, setServices] = useState([]);

    const [formData, setFormData] = useState({
        description: "",
        quantity: "",
        price: "",
    });

    const [isSendEmailModalOpen, setIsSendEmailModalOpen] = useState(false);

    const { id } = useParams();
    const [modalContent, setModalContent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuotation = async () => {
            const data = await getQuotation(id);
            setModalContent(data);
        };

        fetchQuotation();
    }, [id]);

    const openSendEmailModal = (content) => {
        // setModalContent(content);
        setIsSendEmailModalOpen(true);
    };

    const closeSendEmailModal = () => {
        setIsSendEmailModalOpen(false);
        // setModalContent(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setServices([...services, formData]);
        setFormData({
            description: "",
            quantity: "",
            price: "",
        });
        console.log(services);
    };

    const handleSendEmail = async (file) => {
        const response = await sendEmail(modalContent._id, file);
        console.log(response);
        if (!response) return "No se pudo enviar el correo";

        const data = await updateQuotation(modalContent._id, {
            done: !modalContent.done,
        });
        console.log(data);

        // handleReload();
        // onClose();
        closeSendEmailModal()
    };

    return (
        // <Modal isOpen={isOpen} onClose={onClose} title="Realizar Cotización">
        <div className="flex gap-x-12">
            <div className="w-full h-full">
                <h3 className="text-lg font-semibold">Detalles del Repuesto</h3>
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
                    <strong>Otro Problema:</strong> {modalContent?.otherProblem}
                </p>
                <p>
                    <strong>Descripción del Problema:</strong>{" "}
                    {modalContent?.descriptionProblem}
                </p>
                <p>
                    <strong>Nombre:</strong> {modalContent?.name}
                </p>
                <p>
                    <strong>Correo Electrónico:</strong> {modalContent?.email}
                </p>
                <p>
                    <strong>Teléfono:</strong> {modalContent?.phone}
                </p>
                {/* <img
                    src={modalContent?.foto}
                    alt={modalContent?.nombre}
                    className="h-20 w-20 object-cover mt-2"
                /> */}
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-300 hover:bg-gray-400 text-black border rounded-md p-2 mb-4"
                >
                    Regresar
                </button>
            </div>

            <div className="w-full">
                {/* Formulario para agregar servicios */}
                <form onSubmit={handleSubmit} className="flex flex-col mb-4">
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Descripción
                        </label>
                        <input
                            type="text"
                            id="description"
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
                            htmlFor="quantity"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Cantidad
                        </label>
                        <input
                            type="number"
                            id="quantity"
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
                            htmlFor="price"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Precio
                        </label>
                        <input
                            type="number"
                            id="price"
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

                <div className="flex gap-x-4">
                    <ExportPDFButton
                        id={modalContent?._id}
                        data={services}
                    // fileName="cotizaciones.pdf"
                    />

                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white border rounded-md p-2"
                        onClick={() => openSendEmailModal(modalContent)}
                    >
                        Enviar Cotización al Cliente
                    </button>
                </div>

                <SendEmailModal
                    isOpen={isSendEmailModalOpen}
                    onClose={closeSendEmailModal}
                    email={modalContent?.email}
                    handleSendEmail={handleSendEmail}
                />

                {/* <button onClick={changeState}>Click</button> */}
            </div>
        </div>
        // </Modal>
    );
};

export default ResponseQuotationDashboard;
