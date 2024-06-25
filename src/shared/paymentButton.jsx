import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const PaymentButton = ({ preferenceId }) => {
    // initMercadoPago("TEST-3f7ad963-e4e2-49ab-bd6f-4ff2cb15fd8d", { locale: "es-PE" }); // Public key de prueba cuenta principal Wallet Connect
    initMercadoPago("APP_USR-be98f623-5643-4408-925a-7f17c5298597", { locale: "es-PE" }); // Public key de prueba cuenta vendedor Checkout Pro
    return (
        <>
            {preferenceId && (
                <Wallet
                    initialization={{ preferenceId }}
                    customization={{ texts: { valueProp: "smart_option" } }}
                />
            )}
        </>
    );
};

export default PaymentButton;
