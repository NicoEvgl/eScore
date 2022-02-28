import React from "react";
import Scoreboard from "../layouts/Scoreboard";
import VerticalGamesFilters from "../layouts/VerticalGamesFilters";

const ResultsList = () => {
  return (
    <div className="container">
      <div className="w">
        <div className="c">
          <div className="row">
            <VerticalGamesFilters />
            <Scoreboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsList;
