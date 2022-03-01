import React from "react";
import { NavLink } from "react-router-dom";
import SocialMedia from "./layouts/SocialMedia";

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="w">
        <div className="c">
          <SocialMedia />
          <div className="footer-nav">
            <ul>
              <NavLink to={"/"}>Accueil</NavLink>
              <NavLink to={"/"}>Contact</NavLink>
              <NavLink to={"/"}>Mentions Légales et CGU</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
