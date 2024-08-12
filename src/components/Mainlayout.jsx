import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx"
import { Outlet } from "react-router-dom"

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