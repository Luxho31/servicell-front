import { useState } from "react";
import { Toaster, toast } from "sonner";
import { createQuotation } from "../../../services/quotation-service";
import { DATA_PHONES } from "../../../utils/dataPhone";

const Quotation = () => {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        selectedProblems: [],
        otherProblem: "",
        descriptionProblem: "",
        name: "",
        email: "",
        phone: "",
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChangePrivacyPolicies = () => {
        setIsChecked(!isChecked);
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFormData({
                ...formData,
                selectedProblems: [...formData.selectedProblems, value],
            });
        } else {
            setFormData({
                ...formData,
                selectedProblems: formData.selectedProblems.filter(
                    (problem) => problem !== value
                ),
            });
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData2 = {
    //         ...formData,
    //     };
    //     console.log("Formulario enviado", formData2);
    // };

    const handleReload = () => {
        setFormData({
            brand: "",
            model: "",
            selectedProblems: [],
            otherProblem: "",
            descriptionProblem: "",
            name: "",
            email: "",
            phone: "",
        });
        setIsChecked(false);
        // Desmarcar todos los checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // formData.selectedProblems = formData.selectedProblems.join(", ");
        formData.otherProblem = "-";

        try {
            await createQuotation(formData);
            handleReload();
            toast.success('Cotización enviada');
        } catch (error) {
            console.error('Error al enviar la cotización', error);
            toast.error('Error al enviar la cotización');
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-28">
            <h1 className="text-3xl font-semibold mb-4">
                Cotiza la Reparación de tu Equipo
            </h1>
            <p className="mb-8 text-center w-[30%]">
                ¿Tienes problemas con tu dispositivo? Cuéntanos qué le sucede y
                te ayudaremos a resolverlo. ¡Estamos aquí para ayudarte!
            </p>
            <hr className="w-[40%] h-[2px] bg-gray-500 mb-6" />
            <form onSubmit={handleSubmit} className="w-[40%] mx-auto">
                <div className="mb-4">
                    <label
                        htmlFor="brand"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Marca del celular
                    </label>
                    <select
                        name="brand"
                        id="brand"
                        value={formData.brand}
                        onChange={(e) =>
                            setFormData({ ...formData, brand: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    >
                        <option value="" disabled hidden>
                            Seleccione marca de su dispositivo
                        </option>
                        {/* {DATA_PHONES.map((phone) => (
                            <optgroup key={phone.brand} label={phone.brand}>
                                {phone.model.map((model) => (
                                    <option key={model} value={model}>
                                        {model}
                                    </option>
                                ))}
                            </optgroup>
                        ))} */}

                        {DATA_PHONES.map((phone) => (
                            <option key={phone.brand} value={phone.brand}>
                                {phone.brand}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="model"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Modelo del celular
                    </label>

                    <select
                        name="model"
                        id="model"
                        value={formData.model}
                        onChange={(e) =>
                            setFormData({ ...formData, model: e.target.value })
                        }
                        className={`${
                            !formData.brand ? "bg-gray-200" : ""
                        } w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                        disabled={!formData.brand}
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
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Elija una o algunas de las siguientes opciones
                    </label>
                    <div className="grid grid-cols-2 gap-4 my-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="opcion1"
                                value="Mi quipo no enciende"
                                onChange={handleCheckboxChange}
                                className="mr-2 cursor-pointer"
                            />
                            <label
                                htmlFor="opcion1"
                                className="mr-4 cursor-pointer"
                            >
                                Mi quipo no enciende
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="opcion2"
                                value="Mi equipo se calienta"
                                onChange={handleCheckboxChange}
                                className="mr-2 cursor-pointer"
                            />
                            <label
                                htmlFor="opcion2"
                                className="mr-4 cursor-pointer"
                            >
                                Mi equipo se calienta
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="opcion3"
                                value="Mi equipo no carga"
                                onChange={handleCheckboxChange}
                                className="mr-2 cursor-pointer"
                            />
                            <label
                                htmlFor="opcion3"
                                className="mr-4 cursor-pointer"
                            >
                                Mi equipo no carga
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="opcion4"
                                value="Mi equipo se mojó"
                                onChange={handleCheckboxChange}
                                className="mr-2 cursor-pointer"
                            />
                            <label
                                htmlFor="opcion4"
                                className="mr-4 cursor-pointer"
                            >
                                Mi equipo se mojó
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="opcion5"
                                value="Mi pantalla está rota"
                                onChange={handleCheckboxChange}
                                className="mr-2 cursor-pointer"
                            />
                            <label
                                htmlFor="opcion5"
                                className="mr-4 cursor-pointer"
                            >
                                Mi pantalla está rota
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="opcion6"
                                value="Otro"
                                onChange={handleCheckboxChange}
                                className="mr-2 cursor-pointer"
                            />
                            <label
                                htmlFor="opcion6"
                                className="mr-4 cursor-pointer"
                            >
                                Otro
                            </label>
                        </div>
                    </div>
                    {formData.selectedProblems.includes("Otro") && (
                        <div className="mb-4">
                            <label
                                htmlFor="otherProblem"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                ¿Qué otro problema tiene su equipo?
                            </label>
                            <input
                                type="text"
                                id="otherProblem"
                                value={formData.otherProblem}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        otherProblem: e.target.value,
                                    })
                                }
                                placeholder="Ingrese otro problema"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="descriptionProblem"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Descripción del problema
                    </label>
                    <textarea
                        id="descriptionProblem"
                        value={formData.descriptionProblem}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                descriptionProblem: e.target.value,
                            })
                        }
                        placeholder="Describa el problema"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ingrese su nombre completo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Ingrese su correo electrónico"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="phone"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Número de teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Ingrese su número de teléfono"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6 py-3 flex items-center">
                    <input
                        type="checkbox"
                        id="privacyPolicies"
                        className="mr-2 cursor-pointer"
                        // checked={isChecked}
                        onChange={handleCheckboxChangePrivacyPolicies}
                    />
                    <label
                        htmlFor="privacyPolicies"
                        className="mr-4 cursor-pointer"
                    >
                        Acepto las{" "}
                        <a
                            href="https://www.soundczech.cz/temp/lorem-ipsum.pdf"
                            target="_blank"
                            className="text-indigo-500 hover:underline"
                        >
                            Políticas de privacidad
                        </a>
                    </label>
                </div>
                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className={`${
                            isChecked &&
                            formData.brand &&
                            formData.model &&
                            formData.selectedProblems.length > 0 &&
                            formData.descriptionProblem &&
                            formData.name &&
                            formData.email &&
                            formData.phone
                                ? "bg-indigo-500 hover:bg-indigo-600"
                                : "bg-indigo-300"
                        } w-[40%] text-white py-2 rounded-md focus:outline-none focus:bg-indigo-600`}
                        disabled={
                            !isChecked ||
                            !formData.brand ||
                            !formData.model ||
                            formData.selectedProblems.length === 0 ||
                            !formData.descriptionProblem ||
                            !formData.name ||
                            !formData.email ||
                            !formData.phone
                        }
                    >
                        Enviar cotización
                    </button>
                </div>
                <Toaster />

                {/* {JSON.stringify({ formData })} */}
            </form>
        </div>
    );
};

export default Quotation;
