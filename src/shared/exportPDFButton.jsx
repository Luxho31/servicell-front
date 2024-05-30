import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaFilePdf } from "react-icons/fa";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 30 },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderBottomWidth: 0,
    },
    tableRow: { flexDirection: "row" },
    tableColHeader: {
        width: "20%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        backgroundColor: "#d3d3d3",
    },
    tableCol: {
        width: "20%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
    },
    tableCellHeader: { margin: 5, fontSize: 8, fontWeight: "bold" },
    tableCell: { margin: 5, fontSize: 8 },
});

const MyDocument = ({ data }) => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Equipo</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Usuario</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Teléfono</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>
                            Problemas Seleccionados
                        </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>
                            Otro Problema
                        </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>
                            Descripción del Problema
                        </Text>
                    </View>
                </View>
                {data.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>{item.brand}</Text>
                            <Text style={styles.tableCell}>{item.model}</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>{item.name}</Text>
                            <Text style={styles.tableCell}>{item.email}</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>{item.phone}</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {item.selectedProblems.join(", ")}
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {item.otherProblem}
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {item.descriptionProblem}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

const ExportPDFButton = ({ data, fileName }) => (
    <PDFDownloadLink document={<MyDocument data={data} />} fileName={fileName}>
        {({ loading }) => (
            <button
                type="button"
                className="bg-red-400 hover:bg-red-500 text-white flex gap-x-2 items-center border rounded-md p-2"
                disabled={loading}
            >
                <FaFilePdf />
                {loading ? "Generando PDF..." : "Exportar PDF"}
            </button>
        )}
    </PDFDownloadLink>
);

export default ExportPDFButton;
