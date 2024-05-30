import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, paginate }) => {
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

    return (
        <div className="flex justify-center mt-4">
            <nav>
                <ul className="pagination">
                    <li>
                        <button
                            onClick={() => paginate(1)}
                            className={`${
                                currentPage === 1 ? "pointer-events-none" : ""
                            } py-2 px-4 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50`}
                        >
                            &laquo;&laquo;
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                paginate(currentPage === 1 ? currentPage : currentPage - 1)
                            }
                            className={`${
                                currentPage === 1 ? "pointer-events-none" : ""
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
                    {handleRange(currentPage, totalPages).map((number) => (
                        <li key={number}>
                            <button
                                onClick={() => paginate(number)}
                                className={`${
                                    currentPage === number
                                        ? "!bg-blue-500 !text-white"
                                        : "bg-white text-gray-700"
                                } py-2 px-4 border border-gray-300 hover:bg-gray-50 ${
                                    currentPage === number ? "pointer-events-none" : ""
                                }`}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                    {currentPage < totalPages - 3 && (
                        <li>
                            <button
                                className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                                disabled
                            >
                                ...
                            </button>
                        </li>
                    )}
                    {currentPage < totalPages - 2 && (
                        <li>
                            <button
                                onClick={() => paginate(totalPages)}
                                className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                            >
                                {totalPages}
                            </button>
                        </li>
                    )}
                    <li>
                        <button
                            onClick={() =>
                                paginate(
                                    currentPage === totalPages ? currentPage : currentPage + 1
                                )
                            }
                            className={`${
                                currentPage === totalPages ? "pointer-events-none" : ""
                            } py-2 px-4 border border-gray-300 bg-white hover:bg-gray-50`}
                        >
                            &raquo;
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => paginate(totalPages)}
                            className={`${
                                currentPage === totalPages ? "pointer-events-none" : ""
                            } py-2 px-4 border border-gray-300 rounded-r-md bg-white hover:bg-gray-50`}
                        >
                            &raquo;&raquo;
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
