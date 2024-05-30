import { Document, Page, StyleSheet, Text, View, Image } from "@react-pdf/renderer";

// Estilos
const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    // logo: { width: 100, height: 50 },
    logo: { width: 200, height: 50 },
    companyDetails: { textAlign: "right" },
    section: { marginBottom: 20 },
    sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderBottomWidth: 0,
    },
    tableRow: { flexDirection: "row" },
    tableColHeader: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        backgroundColor: "#d3d3d3",
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
    },
    tableCellHeader: { margin: 5, fontSize: 10, fontWeight: "bold" },
    tableCell: { margin: 5, fontSize: 10 },
});

const QuotationDocument = ({ data, logo, companyName, services, price }) => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.header}>
                <Image style={styles.logo} src={logo} />
                <View style={styles.companyDetails}>
                    <Text>{companyName}</Text>
                    <Text>Dirección de la empresa</Text>
                    <Text>Teléfono: (123) 456-7890</Text>
                    <Text>Email: empresa@correo.com</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Detalles del Repuesto</Text>
                <Text>Marca: {data.brand}</Text>
                <Text>Modelo: {data.model}</Text>
                <Text>Problemas Seleccionados: {data.selectedProblems}</Text>
                <Text>Otro Problema: {data.otherProblem}</Text>
                <Text>Descripción del Problema: {data.descriptionProblem}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Datos del Cliente</Text>
                <Text>Nombre: {data.name}</Text>
                <Text>Correo Electrónico: {data.email}</Text>
                <Text>Teléfono: {data.phone}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Servicios y Precios</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Servicio</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Descripción</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Cantidad</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Precio</Text>
                        </View>
                    </View>
                    {services.map((service, index) => (
                        <View key={index} style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{service.name}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{service.description}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{service.quantity}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{service.price}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Text>Total: ${price}</Text>
            </View>
        </Page>
    </Document>
);

export default QuotationDocument;
