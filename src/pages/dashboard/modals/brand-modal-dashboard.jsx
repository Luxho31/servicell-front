import React, { useEffect, useState } from 'react'
import Modal from '../../../shared/modal';
import { createBrand, updateBrand } from '../../../services/brand-service';

const BrandModalDashboard = ({
    isOpen,
    onClose,
    modalContent,
    action,
    title,
    handleReload,
}) => {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (action === "edit") {
            setFormData({
                brand: modalContent?.brand || "",
                model: modalContent?.model || "",
            });
        }
    }, [action, modalContent]);

    const validate = (fieldName = null) => {
        const newErrors = { ...errors };
        const fieldsToValidate = fieldName ? [fieldName] : ["brand", "model"];

        fieldsToValidate.forEach(field => {
            if (!formData[field]) {
                switch (field) {
                    case "brand":
                        newErrors[field] = "*Marca es requerida";
                        break;
                    case "model":
                        newErrors[field] = "*Modelo es requerido";
                        break;
                    default:
                        break;
                }
            } else {
                delete newErrors[field];
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const createMarca = async () => {
        if (!validate()) return;
        await createBrand(formData);
        setFormData({
            brand: "",
            model: "",
        });
        handleReload();
        onClose();
    };

    const updateMarca = async () => {
        if (!validate()) return;
        const id = modalContent?._id;
        await updateBrand(id, formData);
        handleReload();
        onClose();
    };

    const handleAction = () => {
        switch (action) {
            case "create":
                createMarca();
                break;
            case "edit":
                updateMarca();
                break;
            default:
                createBrand();
                break;
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={60} title={title}>
            <div className="flex gap-x-12">
                {/* <form onSubmit={handleAction} className="p-6"> */}
                <form className="w-full p-6">
                    <div className="mb-4">
                        <label
                            htmlFor="brand"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Marca
                        </label>
                        <input
                            type="text"
                            id="brand"
                            onBlur={() => validate("brand")}
                            className={`${errors.brand ? "border-red-500" : "border-gray-300"} w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            value={formData.brand}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    brand: e.target.value,
                                });
                                setErrors({ ...errors, brand: "" });
                            }}
                            placeholder="Ingrese una descripción"
                        />
                        {errors.brand && (
                            <p className="text-red-500 text-sm">{errors.brand}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="model"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Modelo
                        </label>
                        <input
                            type="text"
                            id="model"
                            onBlur={() => validate("model")}
                            className={`${errors.model ? "border-red-500" : "border-gray-300"} w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                            value={formData.model}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    model: e.target.value,
                                });
                                setErrors({ ...errors, model: "" });
                            }}
                            placeholder="Ingrese una descripción"
                        />
                        {errors.model && (
                            <p className="text-red-500 text-sm">{errors.model}</p>
                        )}
                    </div>
                    <button
                        // type="submit"
                        type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded focus:outline-none"
                        onClick={handleAction}
                    >
                        {/* Guardar Repuesto */}
                        {action === 'create' ? 'Guardar' : 'Actualizar'}
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default BrandModalDashboard