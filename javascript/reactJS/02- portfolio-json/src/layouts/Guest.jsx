import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter";


const GuestLayout = () => {
    return (
        <div className="bg-[#F9F5E7] min-h-screen">
            <TheNavbar />
            <Outlet />
            <TheFooter/>
        </div>
    );
}

export default GuestLayout;