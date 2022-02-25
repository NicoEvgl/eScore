import React, { useState } from "react";
import { RiMenuLine, RiMoonLine } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";
import { BiHome } from "react-icons/bi";

const Sidebar = () => {
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
  };

  return (
    <div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
      <div className="sidebar-btn">
        <RiMenuLine className="sidebar-menu-icon" onClick={handleToggler} />
        <span className="hide-visually">Menu</span>
      </div>
      <div className="sidebar-items">
        <div className="item">
          <BiHome className="sidebar-icon" />
          <span className="sidebar-text">Accueil</span>
        </div>
        <div className="item">
          <CgLogIn className="sidebar-icon" />
          <span className="sidebar-text">Connexion</span>
        </div>
        <div className="item">
          <RiMoonLine className="sidebar-icon" />
          <span className="sidebar-text">Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
