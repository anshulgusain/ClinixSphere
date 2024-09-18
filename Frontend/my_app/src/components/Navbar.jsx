import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css"
import Hamburger from "./logo.jsx";




const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
      ClinicSphere
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
            {/* <li>
              <NavLink to="/projects">Projects</NavLink>
            </li> */}
            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            
            {/* <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navbar