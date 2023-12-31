import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const Root = () => {
    return (
        <div>
               <div className="max-w-[1280px] mx-auto dark:bg-gray-900">
        <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;