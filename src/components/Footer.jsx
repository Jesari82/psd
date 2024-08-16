import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-around bg-[#2B384C] text-white h-64 w-full items-center -mt-10">
      <nav className="flex justify-between">
        <div>
          <span className="bg-purple-500 rounded-full px-6 py-4 text-xl mr-3">
            B
          </span>
          <span className="font-bold text-lg">Broklyn</span>
        </div>
        <div className="flex justify-between gap-3 ml-6">
          <Link to="/" className="hover:bg-purple-500 hover:rounded-md">
            Home
          </Link>
          <Link to="/about" className="hover:bg-purple-500 hover:rounded-md">
            About
          </Link>
          <Link to="/process" className="hover:bg-purple-500 hover:rounded-md">
            Process
          </Link>
          <Link
            to="/portfolio"
            className="hover:bg-purple-500 hover:rounded-md"
          >
            Portfolio
          </Link>
          <Link to="/blog" className="hover:bg-purple-500 hover:rounded-md">
            Blog
          </Link>
          <Link to="/services" className="hover:bg-purple-500 hover:rounded-md">
            Services
          </Link>
          <Link to="/contact" className="hover:bg-purple-500 hover:rounded-md">
            Contact
          </Link>
        </div>
      </nav>
      <p>© 2024, All rights reserved.</p>
    </footer>
  );
}

export default Footer;
