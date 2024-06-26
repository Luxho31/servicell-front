// import { useState } from "react";

// const BrandDashboard = () => {
//     const [marca, setMarca] = useState('');
//     const [modelo, setModelo] = useState('');
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Aquí puedes enviar los datos a tu backend o hacer lo que necesites con ellos
//         console.log('Marca:', marca);
//         console.log('Modelo:', modelo);
//         // Luego de hacer lo necesario con los datos, puedes limpiar los campos
//         setMarca('');
//         setModelo('');
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Registrar Marca y Modelo de Celular</h2>
//             <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//                 <div className="mb-4">
//                     <label htmlFor="marca" className="block text-gray-700 font-bold mb-2">
//                         Marca:
//                     </label>
//                     <input
//                         type="text"
//                         id="marca"
//                         value={marca}
//                         onChange={(e) => setMarca(e.target.value)}
//                         placeholder="Ingrese la marca del celular"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         required
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="modelo" className="block text-gray-700 font-bold mb-2">
//                         Modelo:
//                     </label>
//                     <input
//                         type="text"
//                         id="modelo"
//                         value={modelo}
//                         onChange={(e) => setModelo(e.target.value)}
//                         placeholder="Ingrese el modelo del celular"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         required
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         disabled={!marca || !modelo}
//                     >
//                         Registrar
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default BrandDashboard;


import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { registrarMarca, listarMarcas, eliminarMarca, modificarMarca} from '../../services/brand-service';
// import { registrarMarca, listarMarcas, eliminarMarca, modificarMarca } from '../../services/brand-service';
// import '../../index.css'; // Asegúrate de importar el archivo CSS donde defines las clases CSS

const BrandDashboard = () => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [modelos, setModelos] = useState([]);
    const [error, setError] = useState('');
    const [campoVacio, setCampoVacio] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!marca || !modelo) {
            setCampoVacio(!marca ? 'marca' : 'modelo');
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            if (isEditing) {
                const { _id } = modelos[editingIndex];
                await modificarMarca(_id, marca, modelo);
                setIsEditing(false);
                setEditingIndex(null);
            } else {
                await registrarMarca(marca, modelo);
            }
            await listarModelos();
            setMarca('');
            setModelo('');
            setError('');
            setCampoVacio(null);
        } catch (error) {
            console.error('Error al registrar la marca:', error);
            setError('Hubo un problema al registrar la marca');
        }
    };

    const listarModelos = async () => {
        try {
            const listaModelos = await listarMarcas();
            setModelos(listaModelos);
        } catch (error) {
            console.error('Error al obtener la lista de marcas:', error);
            setError('No se pudo cargar la lista de marcas');
        }
    };

    useEffect(() => {
        listarModelos();
    }, []);

    const handleEliminar = async (index) => {
        try {
            const { _id } = modelos[index];
            await eliminarMarca(_id);
            await listarModelos();
        } catch (error) {
            console.error('Error al eliminar la marca:', error);
        }
    };

    const handleEdit = (index) => {
        const { Marca, Modelo } = modelos[index];
        setMarca(Marca);
        setModelo(Modelo);
        setIsEditing(true);
        setEditingIndex(index);
    };

    // Función para filtrar modelos según el término de búsqueda
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filtrar modelos según el término de búsqueda
    const filteredModelos = modelos.filter((modelo) =>
        modelo.Marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        modelo.Modelo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex justify-center items-start h-screen bg-white text-black relative">
            <div className="flex flex-col w-full max-w-6xl mt-8 relative">
                <form onSubmit={handleSubmit} className="bg-white border rounded-lg shadow-lg p-8 flex-1 mb-4">
                    <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Modificar Marca' : 'Registrar Marca'}</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="marca" className="block font-medium mb-2">Marca</label>
                        <input
                            type="text"
                            id="marca"
                            className={`w-full border rounded-md py-2 px-4 ${campoVacio === 'marca' && 'border-red-500'}`}
                            placeholder="Ingrese la marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="modelo" className="block font-medium mb-2">Modelo</label>
                        <input
                            type="text"
                            id="modelo"
                            className={`w-full border rounded-md py-2 px-4 ${campoVacio === 'modelo' && 'border-red-500'}`}
                            placeholder="Ingrese el modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        {isEditing ? 'Modificar Marca' : 'Registrar Marca'}
                    </button>
                </form>
                <div className="bg-white border rounded-lg shadow-lg p-8 flex-1 mt-8">
                    <h2 className="text-2xl font-bold mb-6">Lista de Marcas</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full border rounded-md py-2 px-4"
                            placeholder="Buscar marca o modelo"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <table className="table-fixed w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="w-1/2 px-4 py-2 text-left">Marca</th>
                                <th className="w-1/2 px-4 py-2 text-left">Modelo</th>
                                <th className="w-1/4 px-4 py-2 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredModelos.length > 0 ? (
                                filteredModelos.map((modelo, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{modelo.Marca}</td>
                                        <td className="border px-4 py-2">{modelo.Modelo}</td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => handleEdit(index)}
                                                className="text-blue-500 hover:text-blue-700 mr-2"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => handleEliminar(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">No hay marcas registradas</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrandDashboard;