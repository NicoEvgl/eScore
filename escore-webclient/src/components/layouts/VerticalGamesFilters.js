import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const VerticalGamesFilters = () => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.pandascore.co/videogames?token=Er_MI40219sOumdECxYlscESOyijyzY_KFYv-0H07AnTKEtnUqo"
      )
      .then((res) => setGamesData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="col-3 col-games-filters">
      <ul className="vertical-games-filters">
        {gamesData.map((gameName) => (
          <NavLink key={gameName.id} to={`${gameName.id}`}>
            <li>
              <div className="filter">
                <div className="icon">
                  <img src={gameName.leagues[0].image_url} alt="lol icon" />
                </div>
                <div className="filter-name">{gameName.name}</div>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default VerticalGamesFilters;
