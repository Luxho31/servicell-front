import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Reparacion-de-celulares.png";

export default function Home() {
    return (
        <div className="min-h-screen w-[90%] m-auto flex flex-col gap-y-16 pt-20">
            {/* Sección Banner Principal */}
            <section className="flex my-20">
                <div className="w-1/2 flex flex-col justify-center p-20 gap-y-8">
                    <h1 className="text-4xl font-semibold">
                        Tu conexión a soluciones móviles confiables con
                        SERVICELL K&D
                    </h1>
                    <h3>
                        ¿Problemas con tu teléfono? ¡Nosotros lo solucionamos!
                        En SERVICELL K&D, ofrecemos reparaciones rápidas y
                        confiables para tu dispositivo favorito. Desde pantallas
                        rotas hasta problemas de software, ¡confía en nosotros
                        para devolverle la vida a tu smartphone!
                    </h3>
                    <p className="text-center">
                        Realiza una cotización de tu dispositivo aquí
                    </p>
                    <div className="flex justify-center">
                        <NavLink
                            to={"/quotation"}
                            className="bg-indigo-400 text-white px-8 py-2 rounded-lg hover:bg-indigo-500"
                        >
                            Cotizar Reparación
                        </NavLink>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={Logo} alt="" />
                </div>
            </section>

            {/* Sección Sobre el Equipo de Trabajo */}
            <section className="my-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-semibold mb-4">
                        Nuestro Equipo de Trabajo
                    </h1>
                    <p className="mb-8 text-center w-[50rem]">
                        Conoce a nuestro talentoso equipo: juntos, transformamos
                        problemas en soluciones. Descubre quiénes somos y cómo
                        trabajamos para ofrecerte la mejor experiencia.
                    </p>
                    <hr className="w-[50rem] h-[2px] bg-gray-300 mb-8" />
                </div>
                <div className="w-full flex justify-center gap-x-16">
                    <div className="flex flex-col items-center">
                        <img
                            src="https://img.freepik.com/fotos-premium/joven-empresario-al-aire-libre-entorno-moderno_53419-11374.jpg"
                            alt=""
                            className="w-52 h-52 rounded-full object-cover my-12"
                        />
                        <p className="w-72 text-center">
                            TP1 - Alessandro Ronceros
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                            alt=""
                            className="w-52 h-52 rounded-full object-cover my-12"
                        />
                        <p className="w-72 text-center">
                            TP2 - Jesus Vidaurre
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://thumbs.wbm.im/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg"
                            alt=""
                            className="w-52 h-52 rounded-full object-cover my-12"
                        />
                        <p className="w-72 text-center">
                            TP3 - Jorge Manchego
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://t4.ftcdn.net/jpg/03/70/29/03/360_F_370290384_K0VEqnA7kgxmabRn0QXiyBCbCyPGWNeh.jpg"
                            alt=""
                            className="w-52 h-52 rounded-full object-cover my-12"
                        />
                        <p className="w-72 text-center">
                            TP5 - Luis Sanchez
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Acerca del Negocio */}
            <section className="my-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-4xl font-semibold mb-4">
                        Acerca del Negocio
                    </h1>
                    <p className="mb-8 text-center w-[50rem]">
                        En SERVICELL K&D, nuestro objetivo es simple:
                        proporcionar soluciones expertas para tus dispositivos
                        móviles. Descubre cómo nuestro equipo comprometido y
                        calificado puede ayudarte hoy.
                    </p>
                    <hr className="w-[50rem] h-[2px] bg-gray-300 mb-8" />
                </div>
                <div className="flex">
                    <div className="w-full">
                        <img
                            src="https://navarra.okdiario.com/media/navarra/images/2021/08/25/2021082518410342275.jpg"
                            alt=""
                        />
                    </div>
                    <div className="w-full">
                        <div className="px-20 py-4">
                            <h1 className="text-xl font-semibold mb-6">
                                Conócenos un poco mas...
                            </h1>
                            <p>
                                Nos dedicamos a la Reparación de Equipos Moviles, Tablets y Laptos, desde microcomponentes, pantallas, baterias, y mas contamos con garantia de 3 a 6 meses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Contáctanos */}
            <section className="my-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-4xl font-semibold mb-4">
                        ¿Necesitas Ayuda?
                    </h1>
                    <p className="mb-8 text-center w-[50rem]">
                        Estamos aquí para ayudarte en lo que necesites. No dudes
                        en ponerte en contacto con nosotros y nuestro equipo
                        estará encantado de brindarte el apoyo que necesitas.
                        ¡Tu satisfacción es nuestra prioridad!
                    </p>
                    <hr className="w-[50rem] h-[2px] bg-gray-300 mb-8" />
                </div>
                <div className="flex">
                    <div className="w-full h-96">
                        <iframe
                            title="Ubicación de mi negocio"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.502673178865!2d-76.97962524583367!3d-12.13164839277845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnMTcuNyJTIDxzdCBOZXcgWW9yayBOYW1lLCBOZXcgWW9yaywgVHJhaWwgNjYwNzYsINCo0L7RgdGC0LDRgNCw0YHRgtGMLCAxMTAxMjM!5e0!3m2!1sen!2suk!4v1622008690631!5m2!1sen!2suk&q=-76.97962524583367,-12.13164839277845&zoom=15"
                            className="w-full h-full"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    {/* <div className="w-full flex flex-col items-center h-[40rem]">
                        <h2 className="text-2xl font-semibold mb-6">
                            Contáctanos
                        </h2>
                        <hr className="w-[32rem] bg-black h-[2px]" />
                        <form className="w-[32rem] flex flex-col gap-y-6 py-4">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="w-full border rounded-lg px-4 py-2 outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="">Correo electrónico</label>
                                <input
                                    type="text"
                                    placeholder="Correo electrónico"
                                    className="w-full border rounded-lg px-4 py-2 outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="">Mensaje</label>
                                <textarea
                                    type="text"
                                    placeholder="Mensaje"
                                    className="w-full border rounded-lg px-4 py-2 outline-none"
                                    rows={8}
                                    style={{ resize: "none" }}
                                />
                            </div>
                            <button className="bg-indigo-400 text-white py-2 rounded-lg outline-none hover:bg-indigo-500">
                                Enviar
                            </button>
                        </form>
                    </div> */}
                </div>
            </section>
        </div>
    );
}
