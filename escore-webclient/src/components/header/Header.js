import React from "react";
import TeamHeader from "./TeamHeader";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

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
