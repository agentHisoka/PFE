import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

/*const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wdiag">About US</a>
    </p>
    <p>
      <a href="#possibility">Medical Records</a>
    </p>
    <p>
      <a href="#features">Doctors</a>
    </p>
    <p>
      <a href="#blog">Services</a>
    </p>
 </>
);
*/
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="diag__navbar">
      <div className="diag__navbar-links">
        <div className="diag__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="diag__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wdiag">About US</a>
          </p>
          <p>
            <a href="#possibility">Medical Records</a>
          </p>
          <p>
            <a href="#features">Doctors</a>
          </p>
          <p>
            <a href="#blog">Services</a>
          </p>
        </div>
      </div>
      <div className="diag__navbar-sign">
        <a href="/register">
          <p>Sign in</p>
        </a>

        <a href="/login">
          {" "}
          <button type="button">Sign up</button>{" "}
        </a>
      </div>
      <div className="diag__navbar-menu">
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
          <div className="diag__navbar-menu_container scale-up-center">
            <div className="diag__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wdiag">About US</a>
              </p>
              <p>
                <a href="#possibility">Medical Records</a>
              </p>
              <p>
                <a href="#features">Doctors</a>
              </p>
              <p>
                <a href="#blog">Services</a>
              </p>
            </div>
            <div className="diag__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
