import { useEffect, useState } from "react";
import ProductCard from "../../../components/product-card";
import ProductModal from "../../../shared/productModal";
import Pagination from "../../../shared/pagination";
import { getReplacements } from "../../../services/replacement-service";

const Product = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [replacements, setReplacements] = useState([]);
    const [replacementType, setReplacementType] = useState([]);

    const fetchReplacements = async () => {
        const data = await getReplacements();
        setReplacements(data);
    };

    useEffect(() => {
        fetchReplacements();
    }, []);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(replacements.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Calcular los índices del primer y último item de la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = replacements.slice(indexOfFirstItem, indexOfLastItem);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="min-h-screen flex flex-col items-center py-28">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold">
                    Bienvenido a Nuestro Servicio Técnico
                </h1>
                <p className="text-lg mt-4">
                    Aquí encontrarás los mejores repuestos para tus dispositivos
                </p>
            </header>
            <div className="flex items-start gap-x-4">
                <div className="border">
                    <h1>Filtros</h1>

                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentItems.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={pageNumbers.length}
                paginate={paginate}
            />
            <ProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                product={selectedProduct}
            />
        </div>
    );
};

export default Product;
