import React from "react";
import "./header.css";
import logo from "../../assets/logo/P.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="nav">
          <NavLink exact to={"/"}>
            { <div className="nav__logo--image">
              <img src={logo} alt="logo" />
            </div> }
          </NavLink>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
