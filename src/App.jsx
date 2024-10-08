import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import HappyClients from "./components/HappyClients";
import MainLayout from "./components/MainLayout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Blog from "./components/Blog.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="process" element={<Process />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="blog" element={<Blog />} />
    <Route path="services" element={<Services />} />
    <Route path="contact" element={<Contact />} />

  </Route>));
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
