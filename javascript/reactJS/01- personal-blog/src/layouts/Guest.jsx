import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";


const GuestLayout = () => {
    return (
        <div className="">
            <TheNavbar />
            <div className="flex-row sm:flex">
            <Outlet />
            <CommunityCard/>
            </div>
            <Footer/>
        </div>
    );
}

export default GuestLayout;