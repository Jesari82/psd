import Portfolio from './Portfolio';
import CallToAction from './CallToAction';
import Blog from './Blog';
import Services from "./Services";
import HappyClients from "./HappyClients";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="home">
        <h1>Hero</h1>
      </div>
      <Portfolio />
      <CallToAction />
      <Blog />
      <Services />
      <HappyClients />
      <Contact />
    </>
  );
}

export default Home;
