import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./PAPA LOGO.png";

// import AnimatedLogo from "./images/navBar.mp4"
// Import the shopping cart icon from Font Awesome

import "./Navbar.css";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ borderBottom: "2px solid black" }}>
      <Link to="./" className="title">
        <img src={Logo} width="200px" height="100px" alt="Logo" />{" "}
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="./">Home</NavLink>
        </li>
        <li>
          <NavLink to="./About">About Us</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="./introduction">Introduction</NavLink>
        </li>
        <li>
          <NavLink to="./contact">Contact Us</NavLink>
        </li>
      </ul>

      <div className="cart-icon">
        <i className="fas fa-shopping-cart fa-lg"></i>
      </div>
    </nav>
  );
};
