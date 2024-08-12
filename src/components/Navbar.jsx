import {Link} from 'react-router-dom';
function Navbar () {
  return (
    <nav>
        <div className="logo">
            <span>B</span>
            <span>Broklyn</span>
        </div>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/process">Process</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div> 
    </nav>
  );
}

export default Navbar;