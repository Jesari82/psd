import gilbert from "../assets/gilbert.png";

import Portfolio from "./Portfolio";
import CallToAction from "./CallToAction";
import Blog from "./Blog";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  return (
    <div className="flex justify-between mt-7 container m-auto">
      <div className="m-10 content-center">
        <div className="mb-16">
          <h1 className="font-extrabold text-3xl mb-5">
            Hello, I'm <br />
            Brooklyn Gilbert
          </h1>
          <p>
            I'm a Freelance UI/UX Designer and Developer based in
            London,England.
            <br />
            I strives to build immersive and beautiful web applications through
            <br />
            carefully crafted code and user-centric design.
          </p>
          <button className="py-[12px] px-6 bg-[#A53DFF] text-white font-bold text-lg rounded mt-12 hover:bg-violet-600">
            Say Hello!
          </button>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-purple-200 rounded-md p-1">
            <span>15 Y.</span>
            <span>Expirience</span>
          </div>
          <div className="flex flex-col bg-purple-200 rounded-md p-1">
            <span>250+</span>
            <span>Projects completed</span>
          </div>
          <div className="flex flex-col bg-purple-200 rounded-md p-1">
            <span>58</span>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={gilbert} alt="Brooklyn Gilbert" className="rounded-md" />
      </div>
    </div>
  );
}

export default Home;
