import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const PaymentButton = ({ preferenceId }) => {
    // initMercadoPago("TEST-3f7ad963-e4e2-49ab-bd6f-4ff2cb15fd8d", { locale: "es-PE" }); // Public key de prueba cuenta principal Wallet Connect
    initMercadoPago("TEST-b24fb15d-af82-4014-83c2-02f37b6d3fad", { locale: "es-PE" }); // Public key de prueba cuenta vendedor Checkout Pro
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
