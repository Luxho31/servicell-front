const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-center md:text-left mb-2 md:mb-0">
                        © 2024 SERVICELL K&D. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            Inicio
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            Acerca de
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            Servicios
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
