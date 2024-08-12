import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Services from "./components/Services";
import HappyClients from "./components/HappyClients";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>hello</p>
      <Services />
      <HappyClients />
      <Contact />
    </>
  );
}

export default App;
