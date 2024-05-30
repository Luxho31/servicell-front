import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaFilePdf } from "react-icons/fa";

const ExportPDFButton = ({ document, buttonName, fileName }) => (
    <PDFDownloadLink document={document} fileName={fileName}>
        {({ loading }) => (
            <button
                type="button"
                className="bg-red-400 hover:bg-red-500 text-white flex gap-x-2 items-center border rounded-md p-2"
                disabled={loading}
            >
                <FaFilePdf />
                {loading ? "Generando PDF..." : `${buttonName}`}
            </button>
        )}
    </PDFDownloadLink>
);

export default ExportPDFButton;
