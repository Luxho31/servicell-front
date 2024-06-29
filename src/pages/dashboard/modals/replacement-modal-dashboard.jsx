import { useEffect, useState } from "react";
import Modal from "../../../shared/modal";
import {
    createReplacement,
    updateReplacement,
} from "../../../services/replacement-service";

const ReplacementModalDashboard = ({
    isOpen,
    onClose,
    modalContent,
    action,
    handleReload,
}) => {
    const [formData, setFormData] = useState({
        replacement_type: "",
        brand: "",
        model: "",
        description: "",
        price: "",
        stock: "",
        image: null
    });

    useEffect(() => {
        if (action === "edit" || action === "view") {
            setFormData({
                replacement_type: modalContent?.replacement_type || "",
                brand: modalContent?.brand || "",
                model: modalContent?.model || "",
                description: modalContent?.description || "",
                price: modalContent?.price || "",
                stock: modalContent?.stock || "",
                image: modalContent?.image || null
            });
        }
    }, [action, modalContent]);

    const createRepuesto = async () => {
        await createReplacement(formData);
        setFormData({
            replacement_type: modalContent?.replacement_type || "",
            brand: modalContent?.brand || "",
            model: modalContent?.model || "",
            description: modalContent?.description || "",
            price: modalContent?.price || "",
            stock: modalContent?.stock || "",
            image: modalContent?.image || null
        });
        handleReload();
        onClose();
    };

    const updateRepuesto = async () => {
        const id = modalContent?._id;
        await updateReplacement(id, formData);
        handleReload();
        onClose();
    };

    // const getReplacementById = async () => {
    //     console.log("ver", modalContent?._id);
    // };

    const handleAction = () => {
        switch (action) {
            case "create":
                createRepuesto();
                break;
            case "edit":
                updateRepuesto();
                break;
            default:
                createReplacement();
                break;
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={action}>
            <div className="flex gap-x-12">
                {/* <form onSubmit={handleAction} className="p-6"> */}
                <form className="w-full p-6">
                    <div className="mb-4">
                        <label
                            htmlFor="replacement_type"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Tipo de Repuesto
                        </label>
                        <select
                            id="replacement_type"
                            value={formData.replacement_type}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    replacement_type: e.target.value,
                                });
                            }}
                            className={`${action === "view" ? "bg-gray-200" : ""
                                } w-full p-2 border rounded`}
                            disabled={action === "view"}
                        >
                            <option value="">Seleccione un tipo</option>
                            <option value="Pantallas">Pantallas</option>
                            <option value="Socket">Sócalo</option>
                            <option value="Baterias">Baterías</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="brand"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Marcas
                        </label>
                        <input
                            type="text"
                            id="brand"
                            className={`${action === "view" ? "bg-gray-200" : ""
                                } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            value={formData.brand}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    brand: e.target.value,
                                });
                            }}
                            placeholder="Ej: iPhone, Samsung"
                            disabled={action === "view"}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="model"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Modelos
                        </label>
                        <input
                            type="text"
                            id="model"
                            className={`${action === "view" ? "bg-gray-200" : ""
                                } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            value={formData.model}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    model: e.target.value,
                                });
                            }}
                            placeholder="Ej: 15 Pro Max, Galaxy S24"
                            disabled={action === "view"}
                        />
                    </div>
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
                            className={`${action === "view" ? "bg-gray-200" : ""
                                } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            value={formData.description}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                });
                            }}
                            placeholder="Ej: 6', grande, 3500 amperes"
                            disabled={action === "view"}
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
                            type="text"
                            id="price"
                            className={`${action === "view" ? "bg-gray-200" : ""
                                } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            value={formData.price}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    price: e.target.value,
                                });
                            }}
                            placeholder="Ej: S/.20"
                            disabled={action === "view"}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="stock"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Stock
                        </label>
                        <input
                            type="number"
                            id="stock"
                            className={`${action === "view" ? "bg-gray-200" : ""
                                } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            value={formData.stock}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    stock: e.target.value,
                                });
                            }}
                            placeholder="Ej: 200"
                            disabled={action === "view"}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Foto
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            className={`${action === "view" ? "bg-gray-200" : ""
                                } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    image: e.target.files[0],
                                });
                            }}
                            disabled={action === "view"}
                        />
                    </div>
                    <button
                        // type="submit"
                        type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded focus:outline-none"
                        onClick={handleAction}
                    >
                        Guardar Repuesto
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default ReplacementModalDashboard;
