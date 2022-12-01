import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
function Menu() {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#whatgpt3">What's GPT</a>
      </li>
      <li>
        <a href="#possibility">Open AI</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#blogs">Library</a>
      </li>
    </>
  );
}
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="sai_navbar">
      <div className="sai_navbar-links">
        <div className="sai_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="sai_navbar-links_container">
          <Menu />
        </ul>
        <ul className="sai_navbar-sign">
          <li>Sign in </li>
          <li>
            <button>Sign up</button>
          </li>
        </ul>
        <div className="sai_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={25}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={25}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <>
              <ul className="sai_navbar-menu_container scale-up-center">
                <Menu />
                <p>Sign in </p>
                <button>Sign up</button>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
