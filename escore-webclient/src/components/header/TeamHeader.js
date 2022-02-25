import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const TeamHeader = () => {
  return (
    <div className="team-header">
      <NavLink to={"/"}>
        <div className="team-logo">
          <span className="tagline">
            Live eSport matches all results and standings in real time
          </span>
        </div>
      </NavLink>
      <Sidebar />
    </div>
  );
};

export default TeamHeader;
