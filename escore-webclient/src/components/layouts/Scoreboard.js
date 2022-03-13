import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Game from "./Game";

// import required react-datepicker styling file
import "react-datepicker/dist/react-datepicker.css";

const Scoreboard = () => {
  const [matchesData, setMatchesData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const filters = ["All", "not_started", "running", "finished"];

  useEffect(() => {
    axios
      .get(
        "https://api.pandascore.co/matches?&token=Er_MI40219sOumdECxYlscESOyijyzY_KFYv-0H07AnTKEtnUqo"
      )
      .then((res) => setMatchesData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="col-9 col-results-list">
      <ul className="horizontal-games-filters">
        {filters.map((filter) => (
          <li>
            <div className="filter">
              <div className="filter-name">
                <input
                  type={"radio"}
                  id={filter}
                  name="filterRadio"
                  onChange={(filter) => setSelectedFilter(filter.target.id)}
                />
                <label htmlFor={filter}>{filter}</label>
              </div>
            </div>
            {selectedFilter === "All" && setSelectedFilter("")}
          </li>
        ))}
      </ul>
      <div className="date-filter">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          className="date-filter-selector"
        />
      </div>
      {matchesData
        .filter((game) => game.status.includes(selectedFilter))
        .filter((game) => game.scheduled_at.includes(startDate.getDate()))
        .sort((game) => game.league.name)
        .map((game) => (
          <Game key={game.id} game={game} />
        ))}
    </div>
  );
};

export default Scoreboard;
