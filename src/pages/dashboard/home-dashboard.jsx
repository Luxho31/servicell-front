import LineChart from "../../shared/lineChart";
import Imagen from "../../assets/home-page-dashboard-figure.png";

const HomeDashboard = () => {
    return (
        <div>
            <h1 className="text-4xl">Bienvenido a tu panel de control</h1>
            {/* <LineChart /> */}
            <img src={Imagen} className="w-1/2" alt="" />
        </div>
    );
};

export default HomeDashboard;
