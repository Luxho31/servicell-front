// import { PDFDownloadLink } from "@react-pdf/renderer";
// import { FaFilePdf } from "react-icons/fa";

// const ExportPDFButton = ({ document, buttonName, fileName }) => (
//     <PDFDownloadLink document={document} fileName={fileName}>
//         {({ loading }) => (
//             <button
//                 type="button"
//                 className="bg-red-400 hover:bg-red-500 text-white flex gap-x-2 items-center border rounded-md p-2"
//                 disabled={loading}
//             >
//                 <FaFilePdf />
//                 {loading ? "Generando PDF..." : `${buttonName}`}
//             </button>
//         )}
//     </PDFDownloadLink>
// );

// export default ExportPDFButton;



import { FaFilePdf } from "react-icons/fa";
import { downloadPDFQuotation } from "../services/quotation-service";

const ExportPDFButton = ({id, data}) => {
    const handleOnExportPDF = async () => {
        console.log(data);
        const response = await downloadPDFQuotation(id, data);
        console.log(response);
    };

    return (
        <button
            type="button"
            className="bg-red-400 hover:bg-red-500 text-white flex gap-x-2 items-center border rounded-md focus:outline-none p-2"
            onClick={handleOnExportPDF}
        >
            <FaFilePdf />
            Exportar PDF
        </button>
    );
};

export default ExportPDFButton;

