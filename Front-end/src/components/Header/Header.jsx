import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.svg";

/**
 * This function creates a header with a logo and a navigation menu. The links in the navigation menu lead to different pages of the site.
 *
 * @return  {ReactElement} - Returns the HTML code of the header of the SportSee site
 */
function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={logo} alt="logo du site SportSee" />
      <nav className="header_nav">
        <Link to="/user/24?mocked" className="nav_component">
          Accueil
        </Link>
        <Link to="/user/12" className="nav_component">
          Profil
        </Link>
        <Link to="/user/18" className="nav_component">
          Réglage
        </Link>
        <Link to="*" className="nav_component">
          Communauté
        </Link>
      </nav>
    </div>
  );
};

export default Header;
