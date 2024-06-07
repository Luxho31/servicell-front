import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import LandingLayout from "./layout/LandingLayout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import BrandDashboard from "./pages/dashboard/brand-dashboard";
import HomeDashboard from "./pages/dashboard/home-dashboard";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";
import Home from "./pages/landing/home/home";
import Quotation from "./pages/landing/quotation/quotation";
import ReplacementDashboard from "./pages/dashboard/replacement-dashboard";
import QuotationDashboard from "./pages/dashboard/quotation-dashboard";
import InventoryDashboard from "./pages/dashboard/inventory-dashboard";
import ResponseQuotationDashboard from "./pages/dashboard/response-quotation-dashboard";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Autenticacion */}
                    <Route path="/" element={<AuthLayout />}>
                        <Route index path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>

                    {/* Rutas Públicas */}
                    <Route path="/" element={<LandingLayout />}>
                        <Route index element={<Home />} />
                        <Route path="quotation" element={<Quotation />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="about" element={<About />} />
                    </Route>

                    {/* Rutas Privadas */}
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index element={<HomeDashboard />} />
                        <Route path="brand" element={<BrandDashboard />} />
                        <Route path="replacement" element={<ReplacementDashboard />} />
                        <Route path="quotation" element={<QuotationDashboard />} />
                        <Route path="inventory" element={<InventoryDashboard />} />
                        
                        <Route path="quotation/:id" element={<ResponseQuotationDashboard />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
