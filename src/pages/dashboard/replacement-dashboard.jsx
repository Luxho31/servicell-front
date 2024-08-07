import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEye, FaFilePdf, FaTrash } from "react-icons/fa";
import { MdAdd, MdEdit } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import ReplacementModalDashboard from "./modals/replacement-modal-dashboard";
import Pagination from "../../shared/pagination";
import { getReplacements } from "../../services/replacement-service";
import DeleteReplacementModal from "../../shared/deleteReplacementModal";
// import "./pagination.css";

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

const ReplacementDashboard = () => {
    const [replacements, setReplacements] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [actionModal, setActionModal] = useState("");
    const [search, setSearch] = useState("")
    const [title, setTitle] = useState("")

    const fetchReplacements = async () => {
        const data = await getReplacements();
        setReplacements(data);
    };

    useEffect(() => {
        fetchReplacements();
    }, []);

    // Si no hay elementos en la página actual, actualiza la página actual
    useEffect(() => {
        const maxPage = Math.ceil(replacements.length / itemsPerPage);
        if (currentPage > maxPage) {
            setCurrentPage(maxPage || 1);
        }
    }, [currentPage, replacements, itemsPerPage]);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(replacements.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Calcular los índices del primer y último item de la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Filtrar por marca y modelo
    const filteredReplacements = replacements.filter(item =>
        item.replacement_type.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.model.toLowerCase().includes(search.toLowerCase())
    );

    const currentItems = filteredReplacements.slice(indexOfFirstItem, indexOfLastItem);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    const [modalEstaAbierto, setModalEstaAbierto] = useState(false);

    const abrirModal = (content) => {
        setModalContent(content);
        setModalEstaAbierto(true);
    };

    const cerrarModal = () => {
        setModalEstaAbierto(false);
        setModalContent(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Gestionar Repuestos</h2>
            <div className="py-6">
                <div className="flex justify-between mb-6">
                    <div className="flex justify-between items-center border rounded-md p-2">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="outline-none"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <CiSearch />
                    </div>
                    <div className="flex gap-x-3">
                        <button
                            type="button"
                            className="flex gap-x-2 items-center border rounded-md p-2 hover:shadow-md"
                            onClick={() => {
                                openModal();
                                setActionModal("create");
                                setTitle("Crear Repuesto")
                            }}
                        >
                            <MdAdd />
                            Crear
                        </button>
                        {/* <button
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
                        </button> */}
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
                                    Marca
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Modelo
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Descripcion
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Stock
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* modelo.Marca.toLowerCase().includes(searchTerm.toLowerCase()) */}
                            {currentItems.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b-2 border-gray-200"
                                >
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.replacement_type}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.brand}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.model}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.description}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.price}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.stock}
                                    </td>
                                    {/* <td className="py-2 px-4 text-sm text-gray-700">
                                        <img
                                            src={item.foto}
                                            alt={item.nombre}
                                            className="h-10 w-10 object-cover"
                                        />
                                    </td> */}
                                    <td className="py-2 px-4 text-sm text-gray-700 flex gap-x-2">
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                            onClick={() => {
                                                openModal(item);
                                                setActionModal("edit");
                                                setTitle("Editar Repuesto")
                                            }}
                                        >
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                            onClick={() => {
                                                abrirModal(item);
                                                setActionModal("delete");
                                            }}
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                            onClick={() => {
                                                openModal(item);
                                                setActionModal("view");
                                                setTitle("Detalles del Repuesto")
                                            }}
                                        >
                                            <FaEye />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <Pagination
                    currentPage={currentPage}
                    totalPages={pageNumbers.length}
                    paginate={paginate}
                />
                <ReplacementModalDashboard
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    modalContent={modalContent}
                    action={actionModal}
                    title={title}
                    handleReload={fetchReplacements}
                />
                <DeleteReplacementModal
                    isOpen={modalEstaAbierto}
                    onClose={cerrarModal}
                    modalContent={modalContent}
                    handleReload={fetchReplacements}
                />
            </div>
        </div>
    );
};

export default ReplacementDashboard;
