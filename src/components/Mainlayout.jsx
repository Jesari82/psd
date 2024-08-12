import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx"
import { Outlet } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Process from "./Process.jsx"
import Portfolio from "./Portfolio.jsx"
import Blog from "./Blog.jsx"
import Services from "./Services.jsx"
import Contact from "./Contact.jsx"
import CallToAction from "./CallToAction.jsx";
import HappyClients from "./HappyClients.jsx";

function Mainlayout() {
    return (
        <div>
           <Navbar />
           <div>
                <Home/>
                <About/>
                <Process/>
                <Portfolio/>
                <CallToAction/>
                <Blog/>
                <Services/>
                
                <Contact/>

           </div> 
           <Footer /> 
        </div>
    )
}

export default Mainlayout;