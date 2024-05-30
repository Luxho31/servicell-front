import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Illustration2 from "../../assets/Illustration_2.png";
import Fondo from "../../assets/background.jpg";
import clienteAxios from "../../config/axios";

const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [sex, setSex] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [paso, setPaso] = useState(1);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            [
                name,
                lastname,
                sex,
                birthdate,
                phone,
                email,
                password,
                confirmPassword,
            ].includes("")
        ) {
            console.log("Hay campos vacios");
            return;
        }

        if (password !== confirmPassword) {
            console.log("Los Password no son iguales");
            return;
        }

        if (password.length < 6) {
            console.log("El Password es muy corto, agrega minimo 6 caracteres");
            return;
        }

        try {
            await clienteAxios.post("/usuarios/register", {
                name,
                lastname,
                sex,
                birthdate,
                phone,
                email,
                password,
                confirmPassword,
            });
            navigate("/");
            console.log("Creado correctamente");
        } catch (error) {
            console.log("error: ", error);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${Fondo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-white w-[60%] shadow-lg rounded-lg flex">
                <div
                    className="rounded-l-lg overflow-hidden w-[40%]"
                    style={{
                        backgroundImage: `url(${Illustration2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <NavLink to={"/"} className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 text-white p-2 mr-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <h1 className="text-gray-500 text-lg font-semibold">
                            Regresar al Inicio
                        </h1>
                    </NavLink>
                </div>
                <div className="w-[60%] p-20">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                        Crear una cuenta
                    </h2>
                    {paso == 1 && (
                        <form className={`${paso == 1 ? "block" : "hidden"}`}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Nombre"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="lastname"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={lastname}
                                        onChange={(e) =>
                                            setLastname(e.target.value)
                                        }
                                        placeholder="Apellido"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="sex"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Sexo
                                    </label>
                                    <select
                                        id="sex"
                                        value={sex}
                                        onChange={(e) => setSex(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        defaultValue=""
                                    >
                                        <option value="" disabled hidden>
                                            Seleccione sexo
                                        </option>
                                        <option value="Masculino">
                                            Masculino
                                        </option>
                                        <option value="Femenino">
                                            Femenino
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="birthdate"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Fecha de nacimiento
                                    </label>
                                    <input
                                        type="date"
                                        id="birthdate"
                                        value={birthdate}
                                        onChange={(e) =>
                                            setBirthdate(e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4 col-span-2">
                                    <label
                                        htmlFor="phone"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        placeholder="Teléfono"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => setPaso(2)}
                                className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                            >
                                Siguiente
                            </button>
                        </form>
                    )}
                    {paso == 2 && (
                        <form
                            onSubmit={handleSubmit}
                            className={`${paso == 2 ? "block" : "hidden"}`}
                        >
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="mb-4 col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Correo electrónico"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4 col-span-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Contraseña"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4 col-span-2">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Confirmar contraseña
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        placeholder="Confirmar contraseña"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                            >
                                Registrarse
                            </button>
                            <button
                                onClick={() => setPaso(1)}
                                className="w-full bg-gray-400 text-white py-2 mt-4 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-indigo-600"
                            >
                                Volver
                            </button>
                        </form>
                    )}
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="text-sm text-center text-gray-700">
                        ¿Ya tienes una cuenta?{" "}
                        <NavLink
                            to="/login"
                            className="text-indigo-500 hover:text-indigo-600"
                        >
                            Inicia sesión aquí.
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
