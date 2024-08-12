import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx"
import { Outlet } from "react-router-dom"
import Blog from './Blog';
import Portfolio from './Portfolio';
import CallToAction from './CallToAction';

function Mainlayout() {
    return (
        <div>
           <Navbar />
           <div>
                <Outlet />
           </div> 
           <Footer /> 
        </div>
    )
}

export default Mainlayout;