import React from "react";
import TeamHeader from "./TeamHeader";
import Sidebar from "../layouts/Sidebar";
import NavBar from "../layouts/NavBar";

const Header = () => {
  return (
    <header className="global-header">
      <TeamHeader />
      <Sidebar />
      <NavBar />
    </header>
  );
};

export default Header;
