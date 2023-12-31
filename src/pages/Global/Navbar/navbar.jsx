import React, { useState } from "react";
import "./navbar.css";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../Assets/svg/logo-white.svg";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <img src={logo} alt="logo" />
    <p>
      {" "}
      <a href="/">
        {" "}
        <Link to="/">Home</Link>
      </a>
    </p>
    <p>
      {" "}
      <a href="/glossary">
        {" "}
        <Link to="/glossary">Glossary</Link>
      </a>
    </p>
    <p>
      <button className="nav_btn" onClick={() => document.body.setAttribute("data-theme", "light-theme")}>
        Light Theme
      </button>
    </p>
    <p>
      <button className="nav_btn" onClick={() => document.body.setAttribute("data-theme", "dark-theme")}>
        Night Theme
      </button>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="app__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_links scale-up-center">
            <div className="app__navbar-smallscreen_links-menu">
              <Menu />
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
