import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, paginate }) => {
    const maxVisibleButtons = 5;

    const generatePageButtons = () => {
        const pageButtons = [];
        const leftOffset = Math.ceil((maxVisibleButtons - 1) / 2);
        // const rightOffset = Math.floor((maxVisibleButtons - 1) / 2);

        let startPage = Math.max(1, currentPage - leftOffset);
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

        if (endPage - startPage < maxVisibleButtons - 1) {
            startPage = Math.max(1, endPage - maxVisibleButtons + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <li key={i}>
                    <button
                        onClick={() => paginate(i)}
                        className={`${
                            currentPage === i ? "!bg-blue-500 !text-white" : "bg-white text-gray-700"
                        } py-2 px-4 border border-gray-300 hover:bg-gray-50`}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        if (startPage > 1) {
            pageButtons.unshift(
                <li key="start">
                    <button
                        onClick={() => paginate(1)}
                        className="bg-white text-gray-700 py-2 px-4 border border-gray-300 hover:bg-gray-50"
                    >
                        1
                    </button>
                </li>
            );
            if (startPage > 2) {
                pageButtons.splice(1, 0,
                    <li key="ellipsisStart">
                        <button
                            className="bg-white text-gray-700 py-2 px-4 border border-gray-300 hover:bg-gray-50"
                            disabled
                        >
                            ...
                        </button>
                    </li>
                );
            }
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageButtons.push(
                    <li key="ellipsisEnd">
                        <button
                            className="bg-white text-gray-700 py-2 px-4 border border-gray-300 hover:bg-gray-50"
                            disabled
                        >
                            ...
                        </button>
                    </li>
                );
            }
            pageButtons.push(
                <li key="end">
                    <button
                        onClick={() => paginate(totalPages)}
                        className="bg-white text-gray-700 py-2 px-4 border border-gray-300 hover:bg-gray-50"
                    >
                        {totalPages}
                    </button>
                </li>
            );
        }

        return pageButtons;
    };

    return (
        <div className="flex justify-center mt-4">
            <nav>
                <ul className="pagination">
                    <li>
                        <button
                            onClick={() => paginate(1)}
                            className={`${currentPage === 1 ? "pointer-events-none" : ""} py-2 px-4 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50`}
                        >
                            {"<<"}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            className={`${currentPage === 1 ? "pointer-events-none" : ""} py-2 px-4 border border-gray-300 bg-white hover:bg-gray-50`}
                        >
                            {"<"}
                        </button>
                    </li>
                    {generatePageButtons()}
                    <li>
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            className={`${currentPage === totalPages ? "pointer-events-none" : ""} py-2 px-4 border border-gray-300 bg-white hover:bg-gray-50`}
                        >
                            {">"}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => paginate(totalPages)}
                            className={`${currentPage === totalPages ? "pointer-events-none" : ""} py-2 px-4 border border-gray-300 rounded-r-md bg-white hover:bg-gray-50`}
                        >
                            {">>"}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
