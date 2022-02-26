import React from "react";

const HorizontalGamesFilters = () => {
  return (
    <ul className="horizontal-games-filters">
      <li>
        <div className="filter">
          <div className="filter-name">Tous</div>
        </div>
      </li>
      <li>
        <div className="filter">
          <div className="filter-name">Live</div>
        </div>
      </li>
      <li>
        <div className="filter">
          <div className="filter-name">Terminés</div>
        </div>
      </li>
      <li>
        <div className="filter">
          <div className="filter-name">Prévus</div>
        </div>
      </li>
    </ul>
  );
};

export default HorizontalGamesFilters;
