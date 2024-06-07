import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEye, FaFilePdf, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";

const repuestosData = [
    {
        tipo: "Pantallas",
        nombre: "Pantalla Galaxy",
        descripcion: '6", grande',
        marca: "Samsung",
        modelo: "Galaxy S24",
        precio: "S/.20",
        stock: 200,
        foto: "https://via.placeholder.com/150", // URL de ejemplo para la imagen
    },
    {
        tipo: "Pantallas",
        nombre: "Pantalla iPhone",
        descripcion: '5.8", OLED',
        marca: "Apple",
        modelo: "iPhone X",
        precio: "S/.30",
        stock: 150,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería Samsung",
        descripcion: "3000mAh",
        marca: "Samsung",
        modelo: "Galaxy S20",
        precio: "S/.25",
        stock: 180,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Pantallas",
        nombre: "Pantalla Galaxy",
        descripcion: '6", grande',
        marca: "Samsung",
        modelo: "Galaxy S24",
        precio: "S/.20",
        stock: 200,
        foto: "https://via.placeholder.com/150", // URL de ejemplo para la imagen
    },
    {
        tipo: "Pantallas",
        nombre: "Pantalla iPhone",
        descripcion: '5.8", OLED',
        marca: "Apple",
        modelo: "iPhone X",
        precio: "S/.30",
        stock: 150,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería Samsung",
        descripcion: "3000mAh",
        marca: "Samsung",
        modelo: "Galaxy S20",
        precio: "S/.25",
        stock: 180,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Pantallas",
        nombre: "Pantalla Galaxy",
        descripcion: '6", grande',
        marca: "Samsung",
        modelo: "Galaxy S24",
        precio: "S/.20",
        stock: 200,
        foto: "https://via.placeholder.com/150", // URL de ejemplo para la imagen
    },
    {
        tipo: "Pantallas",
        nombre: "Pantalla iPhone",
        descripcion: '5.8", OLED',
        marca: "Apple",
        modelo: "iPhone X",
        precio: "S/.30",
        stock: 150,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería Samsung",
        descripcion: "3000mAh",
        marca: "Samsung",
        modelo: "Galaxy S20",
        precio: "S/.25",
        stock: 180,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Pantallas",
        nombre: "Pantalla Galaxy",
        descripcion: '6", grande',
        marca: "Samsung",
        modelo: "Galaxy S24",
        precio: "S/.20",
        stock: 200,
        foto: "https://via.placeholder.com/150", // URL de ejemplo para la imagen
    },
    {
        tipo: "Pantallas",
        nombre: "Pantalla iPhone",
        descripcion: '5.8", OLED',
        marca: "Apple",
        modelo: "iPhone X",
        precio: "S/.30",
        stock: 150,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería Samsung",
        descripcion: "3000mAh",
        marca: "Samsung",
        modelo: "Galaxy S20",
        precio: "S/.25",
        stock: 180,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Baterias",
        nombre: "Batería iPhone",
        descripcion: "2900mAh",
        marca: "Apple",
        modelo: "iPhone 11",
        precio: "S/.35",
        stock: 100,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    {
        tipo: "Sócalos",
        nombre: "Sócalo Universal",
        descripcion: "Negro, plástico",
        marca: "Genérico",
        modelo: "Universal",
        precio: "S/.10",
        stock: 300,
        foto: "https://via.placeholder.com/150",
    },
    // Otros repuestos...
];

const InventoryDashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(repuestosData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Calcular los índices del primer y último item de la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = repuestosData.slice(indexOfFirstItem, indexOfLastItem);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Función para manejar el rango de páginas a mostrar
    const handleRange = (currentPage, totalPages) => {
        const range = 2; // Número de páginas a mostrar antes y después de la página actual
        const firstPage = 1;
        const lastPage = totalPages;

        // Si hay menos de 5 páginas, mostrar todas
        if (lastPage <= 5) return [...Array(lastPage).keys()].map((i) => i + 1);

        let startPage, endPage;

        // Si la página actual está en el rango de las primeras 3 páginas
        if (currentPage <= firstPage + 1 + range) {
            startPage = firstPage;
            endPage = startPage + range * 2;
        }
        // Si la página actual está en el rango de las últimas 3 páginas
        else if (currentPage >= lastPage - range) {
            startPage = lastPage - range * 2;
            endPage = lastPage;
        }
        // Si la página actual está en el rango intermedio
        else {
            startPage = currentPage - range;
            endPage = currentPage + range;
        }

        return [...Array(endPage - startPage + 1).keys()].map(
            (i) => i + startPage
        );
    };

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };




    return (
        <div className="container mx-auto p-4">
            <div className="py-6">
                <div className="flex justify-between mb-6">
                    <div className="flex justify-between items-center border rounded-md p-2">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="outline-none"
                        />
                        <CiSearch />
                    </div>
                    <div className="flex gap-x-3">
                        <button
                            type="button"
                            className="bg-red-400 hover:bg-red-500 text-white flex gap-x-2 items-center border rounded-md p-2"
                        >
                            <FaFilePdf />
                            Exportar PDF
                        </button>
                        <button
                            type="button"
                            className="bg-green-700 hover:bg-green-800 text-white flex gap-x-2 items-center border rounded-md p-2"
                        >
                            <RiFileExcel2Fill />
                            Exportar Excel
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Tipo de Repuesto
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Descripción
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Marca
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Modelo
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Stock
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Foto
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b-2 border-gray-200"
                                >
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.tipo}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.nombre}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.descripcion}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.marca}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.modelo}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.precio}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.stock}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        <img
                                            src={item.foto}
                                            alt={item.nombre}
                                            className="h-10 w-10 object-cover"
                                        />
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700 flex gap-x-2">
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                        >
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                            onClick={() => openModal(item)}
                                        >
                                            <FaEye />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Paginación */}
                    <div className="flex justify-center mt-4">
                        <nav>
                            <ul className="pagination">
                                <li>
                                    <button
                                        onClick={() => paginate(1)}
                                        className={`${
                                            currentPage === 1
                                                ? "pointer-events-none"
                                                : ""
                                        } py-2 px-4 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50`}
                                    >
                                        &laquo;&laquo;
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            paginate(
                                                currentPage === 1
                                                    ? currentPage
                                                    : currentPage - 1
                                            )
                                        }
                                        className={`${
                                            currentPage === 1
                                                ? "pointer-events-none"
                                                : ""
                                        } py-2 px-4 border border-gray-300 bg-white hover:bg-gray-50`}
                                    >
                                        &laquo;
                                    </button>
                                </li>
                                {currentPage > 4 && (
                                    <li>
                                        <button
                                            onClick={() => paginate(1)}
                                            className="py-2 px-4 border border-gray-300 bg-white hover:bg-gray-50"
                                        >
                                            1
                                        </button>
                                    </li>
                                )}
                                {currentPage > 4 && (
                                    <li>
                                        <button
                                            className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                                            disabled
                                        >
                                            ...
                                        </button>
                                    </li>
                                )}
                                {handleRange(
                                    currentPage,
                                    pageNumbers.length
                                ).map((number) => (
                                    <li key={number}>
                                        <button
                                            onClick={() => paginate(number)}
                                            className={`${
                                                currentPage === number
                                                    ? "!bg-blue-500 !text-white"
                                                    : "bg-white text-gray-700"
                                            } py-2 px-4 border border-gray-300 hover:bg-gray-50 ${
                                                currentPage === number
                                                    ? "pointer-events-none"
                                                    : ""
                                            }`}
                                        >
                                            {number}
                                        </button>
                                    </li>
                                ))}
                                {currentPage < pageNumbers.length - 3 && (
                                    <li>
                                        <button
                                            className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                                            disabled
                                        >
                                            ...
                                        </button>
                                    </li>
                                )}
                                {currentPage < pageNumbers.length - 2 && (
                                    <li>
                                        <button
                                            onClick={() =>
                                                paginate(pageNumbers.length)
                                            }
                                            className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                                        >
                                            {pageNumbers.length}
                                        </button>
                                    </li>
                                )}
                                <li>
                                    <button
                                        onClick={() =>
                                            paginate(
                                                currentPage ===
                                                    pageNumbers.length
                                                    ? currentPage
                                                    : currentPage + 1
                                            )
                                        }
                                        className={`${
                                            currentPage === pageNumbers.length
                                                ? "pointer-events-none"
                                                : ""
                                        } py-2 px-4 border border-gray-300 bg-white hover:bg-gray-50`}
                                    >
                                        &raquo;
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            paginate(pageNumbers.length)
                                        }
                                        className={`${
                                            currentPage === pageNumbers.length
                                                ? "pointer-events-none"
                                                : ""
                                        } py-2 px-4 border border-gray-300 rounded-r-md bg-white hover:bg-gray-50`}
                                    >
                                        &raquo;&raquo;
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <QuotationModalDashboard
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        modalContent={modalContent}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default InventoryDashboard;
