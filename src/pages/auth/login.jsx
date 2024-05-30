import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Illustration1 from "../../assets/Illustration_1.png";
import Fondo from "../../assets/background.jpg";
import clienteAxios from "../../config/axios";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([email, password].includes("")) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        try {
            const { data } = await clienteAxios.post("/usuarios/login", {
                email,
                password,
            });
            localStorage.setItem("token", data.token);
            setAuth(data);
            navigate("/");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
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
                        backgroundImage: `url(${Illustration1})`,
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
                        Iniciar sesión
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
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
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo electrónico"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-6">
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
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        {/* <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="mr-2"
                            />
                            <label
                                htmlFor="remember"
                                className="text-sm text-gray-700"
                            >
                                Recordarme
                            </label>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="text-sm text-indigo-500 hover:text-indigo-600"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div> */}
                        <input
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                            value="Iniciar sesión"
                        />
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="text-sm text-center text-gray-700">
                        ¿No tienes una cuenta?{" "}
                        <NavLink
                            to={"/register"}
                            className="text-indigo-500 hover:text-indigo-600"
                        >
                            Regístrate aquí.
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
