import { useEffect, useState } from "react";
import Modal from "../../../shared/modal";
import {
    createReplacement,
    updateReplacement,
} from "../../../services/replacement-service";
import { DATA_PHONES } from "../../../utils/dataPhone";

const ReplacementModalDashboard = ({
    isOpen,
    onClose,
    modalContent,
    action,
    title,
    handleReload,
}) => {
    const [formData, setFormData] = useState({
        replacement_type: "",
        brand: "",
        model: "",
        description: "",
        price: "",
        // stock: "",
        image: null
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (action === "edit" || action === "view") {
            setFormData({
                replacement_type: modalContent?.replacement_type || "",
                brand: modalContent?.brand || "",
                model: modalContent?.model || "",
                description: modalContent?.description || "",
                price: modalContent?.price || "",
                // stock: modalContent?.stock || "",
                image: modalContent?.image__url || null
            });
            setPreviewImage(modalContent?.image_url || null);
        }
    }, [action, modalContent]);

    const validate = (fieldName = null) => {
        const newErrors = { ...errors };
        const fieldsToValidate = fieldName ? [fieldName] : ["replacement_type", "brand", "model", "description", "price", "image"];

        fieldsToValidate.forEach(field => {
            if (!formData[field]) {
                switch (field) {
                    case "replacement_type":
                        newErrors[field] = "*Tipo de repuesto es requerido";
                        break;
                    case "brand":
                        newErrors[field] = "*Marca es requerida";
                        break;
                    case "model":
                        newErrors[field] = "*Modelo es requerido";
                        break;
                    case "description":
                        newErrors[field] = "*Descripción es requerida";
                        break;
                    case "price":
                        newErrors[field] = "*Precio es requerido";
                        break;
                    case "image":
                        newErrors[field] = "*Imagen es requerida";
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

    const createRepuesto = async () => {
        if (!validate()) return;
        await createReplacement(formData);
        setFormData({
            replacement_type: modalContent?.replacement_type || "",
            brand: modalContent?.brand || "",
            model: modalContent?.model || "",
            description: modalContent?.description || "",
            price: modalContent?.price || "",
            // stock: modalContent?.stock || "",
            image: null
        });
        setPreviewImage(null);
        handleReload();
        onClose();
    };

    const updateRepuesto = async () => {
        if (!validate()) return;
        const id = modalContent?._id;
        await updateReplacement(id, formData);
        handleReload();
        onClose();
    };

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
        <Modal isOpen={isOpen} onClose={onClose} size={60} title={title}>
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
                                setErrors({ ...errors, replacement_type: "" });
                            }}
                            onBlur={() => validate("replacement_type")}
                            className={`${errors.replacement_type ? "border-red-500" : "border-gray-300"} ${action === "view" ? "bg-gray-200" : ""
                                } w-full p-2 border rounded focus:outline-none focus:border-indigo-500`}
                            disabled={action === "view"}
                        >
                            <option value="">Seleccione un tipo</option>
                            <option value="Pantallas">Pantallas</option>
                            <option value="Zocalo">Zocalo</option>
                            <option value="Baterias">Baterías</option>
                        </select>
                        {errors.replacement_type && (
                            <p className="text-red-500 text-sm">{errors.replacement_type}</p>
                        )}
                    </div>
                    <div className="flex gap-x-4">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="brand"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Marcas
                            </label>
                            <select
                                id="brand"
                                value={formData.brand}
                                onChange={(e) => {
                                    setFormData({ ...formData, brand: e.target.value })
                                    setErrors({ ...errors, brand: "" });
                                }}
                                // className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                onBlur={() => validate("brand")}
                                className={`${errors.brand ? "border-red-500" : "border-gray-300"} ${action === "view" ? "bg-gray-200" : ""
                                    } w-full p-2 border rounded focus:outline-none focus:border-indigo-500`}
                                disabled={action === "view"}
                            >
                                <option value="" disabled hidden>
                                    Seleccione marca de su dispositivo
                                </option>
                                {DATA_PHONES.map((phone) => (
                                    <option key={phone.brand} value={phone.brand}>
                                        {phone.brand}
                                    </option>
                                ))}
                            </select>
                            {errors.brand && (
                                <p className="text-red-500 text-sm">{errors.brand}</p>
                            )}
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="model"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Modelos
                            </label>
                            <select
                                id="model"
                                value={formData.model}
                                onChange={(e) => {
                                    setFormData({ ...formData, model: e.target.value })
                                    setErrors({ ...errors, model: "" });
                                }
                                }
                                onBlur={() => validate("model")}
                                className={`${errors.model ? "border-red-500" : "border-gray-300"} ${!formData.brand || action === "view" ? "bg-gray-200" : ""
                                    } w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                                disabled={!formData.brand || action === "view"}
                            >
                                <option value="" disabled hidden>
                                    Seleccione modelo de su dispositivo
                                </option>
                                {DATA_PHONES.map((phone) => {
                                    if (phone.brand === formData.brand) {
                                        return phone.model.map((model) => (
                                            <option key={model} value={model}>
                                                {model}
                                            </option>
                                        ));
                                    }
                                    return null;
                                })}
                            </select>
                            {errors.model && (
                                <p className="text-red-500 text-sm">{errors.model}</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Descripción
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            onBlur={() => validate("description")}
                            className={`${errors.description ? "border-red-500" : "border-gray-300"} ${action === "view" ? "bg-gray-200" : ""
                                } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 resize-none`}
                            value={formData.description}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                });
                                setErrors({ ...errors, description: "" });
                            }}
                            placeholder="Ingrese una descripción"
                            rows={4}
                            disabled={action === "view"}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-sm">{errors.description}</p>
                        )}
                    </div>
                    <div className="flex gap-x-4">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="price"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Precio
                            </label>
                            <input
                                type="number"
                                id="price"
                                onBlur={() => validate("price")}
                                className={`${errors.price ? "border-red-500" : "border-gray-300"} ${action === "view" ? "bg-gray-200" : ""
                                    } w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                                value={formData.price}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === '-' ||
                                        e.key === '+' ||
                                        e.key === 'e' ||
                                        e.key === 'E' ||
                                        (e.key === '.' && e.target.value.includes('.'))
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        price: e.target.value,
                                    });
                                    setErrors({ ...errors, price: "" });
                                }}
                                placeholder="Ingrese un precio"
                                disabled={action === "view"}
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm">{errors.price}</p>
                            )}
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="image"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Foto
                            </label>
                            <div className="flex items-start gap-x-12">
                                <label
                                    htmlFor="image"
                                    className={`${action === "view" ? "hidden" : ""} bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer`}
                                >
                                    Subir Imagen
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFormData({ ...formData, image: file });
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setPreviewImage(reader.result);
                                            };
                                            reader.readAsDataURL(file);
                                        } else {
                                            setPreviewImage(null);
                                        }
                                    }}
                                    disabled={action === "view"}
                                />
                                {previewImage && (
                                    // <div className="mb-4">
                                    <img
                                        src={previewImage}
                                        alt="Vista previa de la imagen"
                                        className="w-32 h-32 object-cover rounded"
                                    />
                                    // </div>
                                )}
                            </div>
                        </div>
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
