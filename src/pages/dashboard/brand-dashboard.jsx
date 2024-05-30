import { useState } from "react";

const BrandDashboard = () => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a tu backend o hacer lo que necesites con ellos
        console.log('Marca:', marca);
        console.log('Modelo:', modelo);
        // Luego de hacer lo necesario con los datos, puedes limpiar los campos
        setMarca('');
        setModelo('');
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Registrar Marca y Modelo de Celular</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="marca" className="block text-gray-700 font-bold mb-2">
                        Marca:
                    </label>
                    <input
                        type="text"
                        id="marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        placeholder="Ingrese la marca del celular"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="modelo" className="block text-gray-700 font-bold mb-2">
                        Modelo:
                    </label>
                    <input
                        type="text"
                        id="modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        placeholder="Ingrese el modelo del celular"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={!marca || !modelo}
                    >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BrandDashboard;
