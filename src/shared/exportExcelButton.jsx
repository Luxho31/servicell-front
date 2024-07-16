import { RiFileExcel2Fill } from "react-icons/ri";
import * as XLSX from "xlsx";

const ExportExcelButton = ({ data, fileName, style }) => {
    const handleOnExportExcel = () => {
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(
            data.map((item) => ({
                Marca: item.brand,
                Modelo: item.model,
                "Problemas Seleccionados": item.selectedProblems.join(", "),
                "Otro Problema": item.otherProblem,
                "Descripción del Problema": item.descriptionProblem,
                Nombre: item.name,
                "Correo Electrónico": item.email,
                Teléfono: item.phone,
            }))
        );
        XLSX.utils.book_append_sheet(wb, ws, "Cotizaciones");
        XLSX.writeFile(wb, fileName);
    };

    return (
        <button
            type="button"
            // className="bg-green-700 hover:bg-green-800 text-white flex gap-x-2 items-center border rounded-md p-2"
            className={style}
            onClick={handleOnExportExcel}
        >
            <RiFileExcel2Fill />
            Exportar Excel
        </button>
    );
};

export default ExportExcelButton;