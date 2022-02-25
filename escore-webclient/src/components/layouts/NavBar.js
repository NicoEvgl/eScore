import React from "react";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className="navbar" role={"navigation"}>
      <div className="w">
        <div className="c">
          <ul className="menu">
            <NavLink to={"/"}>
              <BiHome className="sidebar-icon" />
              <li className="hide-visually">Accueil</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>League Of Legends</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>Valorant</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>CSGO</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>Rocket League</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>Rainbow Six</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>Dota 2</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
