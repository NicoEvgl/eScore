import React from "react";
import { NavLink } from "react-router-dom";
import allgames from "../../assets/png/allgames-ico.png";
import lol from "../../assets/png/lol-ico.png";
import csgo from "../../assets/png/csgo-ico.png";
import valo from "../../assets/png/valorant-ico.png";
import dota from "../../assets/png/dota2-ico.png";
import rl from "../../assets/png/rl-ico.png";
import r6 from "../../assets/png/r6-ico.png";

const VerticalGamesFilters = () => {
  return (
    <div className="col-3 col-games-filters">
      <ul className="vertical-games-filters">
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={allgames} alt="allgames-icon" />
              </div>
              <div className="filter-name">Tous les jeux</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={lol} alt="allgames-icon" />
              </div>
              <div className="filter-name">League Of Legends</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={csgo} alt="allgames-icon" />
              </div>
              <div className="filter-name">Counter-Strike : GO</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={valo} alt="allgames-icon" />
              </div>
              <div className="filter-name">Valorant</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={dota} alt="allgames-icon" />
              </div>
              <div className="filter-name">Dota 2</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={rl} alt="allgames-icon" />
              </div>
              <div className="filter-name">Rocket League</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={r6} alt="allgames-icon" />
              </div>
              <div className="filter-name">Rainbow 6</div>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default VerticalGamesFilters;
