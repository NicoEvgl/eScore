import React from "react";
import { NavLink } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul>
        <NavLink to={"/"}>
          <li>
            <RiFacebookFill className="social-icon fb"></RiFacebookFill>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <RiTwitterFill className="social-icon tw"></RiTwitterFill>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <RiInstagramFill className="social-icon insta"></RiInstagramFill>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SocialMedia;
