import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import NavBar from "./layouts/NavBar";

const Header = () => {
  return (
    <header className="global-header">
      <div className="team-header">
        <NavLink to={"/"}>
          <div className="team-logo">
            <span className="tagline">
              Live eSport matches all results and standings in real time
            </span>
          </div>
        </NavLink>
      </div>
      <Sidebar />
      <NavBar />
    </header>
  );
};

export default Header;
