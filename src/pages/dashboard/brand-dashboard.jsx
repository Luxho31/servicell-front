import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';
import { MdAdd, MdEdit } from 'react-icons/md';
import { deleteBrand, getBrands } from '../../services/brand-service';
import Pagination from '../../shared/pagination';
import BrandModalDashboard from './modals/brand-modal-dashboard';
import { Popconfirm, Tooltip } from 'antd';


const BrandDashboard = () => {
    const [brands, setBrands] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [actionModal, setActionModal] = useState("");
    const [search, setSearch] = useState("")
    const [selectedBrand, setSelectedBrand] = useState("");
    const [title, setTitle] = useState("")

    const fetchBrands = async () => {
        const data = await getBrands();
        setBrands(data);
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    // Si no hay elementos en la página actual, actualiza la página actual
    useEffect(() => {
        const maxPage = Math.ceil(brands.length / itemsPerPage);
        if (currentPage > maxPage) {
            setCurrentPage(maxPage || 1);
        }
    }, [currentPage, brands, itemsPerPage]);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(brands.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Calcular los índices del primer y último item de la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Filtrar por marca y modelo
    const filteredBrands = brands.filter(item =>
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.model.toLowerCase().includes(search.toLowerCase())
    ).filter(item => {
        return selectedBrand ? item.brand === selectedBrand : true;
    });

    const currentItems = filteredBrands.slice(indexOfFirstItem, indexOfLastItem);

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

    const uniqueBrands = [...new Set(brands.map(item => item.brand))];

    const handleDelete = async (item) => {
        console.log("Deleting", item);
        try {
            await deleteBrand(item._id);
            fetchBrands();
        } catch (error) {
            console.error("Error deleting brand", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Gestionar Marca y Modelo</h2>
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
                    <select
                        className="border rounded-md p-2"
                        value={selectedBrand}
                        onChange={(e) => {
                            setSelectedBrand(e.target.value);
                            setCurrentPage(1); // Reset to first page on filter change
                        }}
                    >
                        <option value="">Todas las Marcas</option>
                        {uniqueBrands.map((brand, index) => (
                            <option key={index} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
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
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Marca
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Modelo
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
                                        {item.brand}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.model}
                                    </td>
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
                                        {/* <Tooltip title="prompt text"> */}
                                        <Popconfirm
                                            title="¿Desea eliminar?"
                                            onConfirm={() => handleDelete(item)}
                                            onCancel={() => console.log("Cancelado")}
                                            okText="Sí"
                                            cancelText="No"
                                        >
                                            <button
                                                type="button"
                                                className="rounded-md p-2 hover:shadow-md delete-button"
                                            >
                                                <FaTrash />
                                            </button>
                                        </Popconfirm>
                                        {/* </Tooltip> */}
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

                <BrandModalDashboard
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    modalContent={modalContent}
                    action={actionModal}
                    title={title}
                    handleReload={fetchBrands}
                />
            </div>
        </div>
    );
};

export default BrandDashboard;