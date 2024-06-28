import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Chatbot from "../components/chatbot";

const LandingLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            {/* Aqui poner el chatbot */}
            <Chatbot />
            <Footer />
        </>
    );
};

export default LandingLayout;
