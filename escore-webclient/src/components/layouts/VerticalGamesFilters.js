import React from "react";
import { NavLink } from "react-router-dom";

const VerticalGamesFilters = () => {
  return (
    <div className="col-3 col-games-filters">
      <ul className="vertical-games-filters">
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={"../img/ico/allgames-ico.png"} alt="allgames icon" />
              </div>
              <div className="filter-name">Tous les jeux</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={"../img/ico/lol-ico.png"} alt="lol icon" />
              </div>
              <div className="filter-name">League Of Legends</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={"../img/ico/csgo-ico.png"} alt="csgo icon" />
              </div>
              <div className="filter-name">Counter-Strike : GO</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={"../img/ico/valorant-ico.png"} alt="valorant icon" />
              </div>
              <div className="filter-name">Valorant</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={"../img/ico/dota2-ico.png"} alt="dota2 icon" />
              </div>
              <div className="filter-name">Dota 2</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={"../img/ico/rl-ico.png"} alt="rocket league icon" />
              </div>
              <div className="filter-name">Rocket League</div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li>
            <div className="filter">
              <div className="icon">
                <img src={"../img/ico/r6-ico.png"} alt="rainbow six icon" />
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
