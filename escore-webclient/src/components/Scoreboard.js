import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Game from "./layouts/Game";

// import required react-datepicker styling file
import "react-datepicker/dist/react-datepicker.css";

const Scoreboard = () => {
  const [matchesData, setMatchesData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const filters = ["All", "not_started", "running", "finished"];
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.pandascore.co/videogames?token=Er_MI40219sOumdECxYlscESOyijyzY_KFYv-0H07AnTKEtnUqo"
      )
      .then((res) => setGamesData(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.pandascore.co/matches?&token=Er_MI40219sOumdECxYlscESOyijyzY_KFYv-0H07AnTKEtnUqo"
      )
      .then((res) => setMatchesData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="w">
        <div className="c">
          <div className="row">
            <div className="col-3 col-games-filters">
              <ul className="vertical-games-filters">
                <li>
                  <div className="filter">
                    <div className="icon">
                      <img src="../img/ico/allgames-ico.png" alt="lol icon" />
                    </div>
                    <div className="filter-name">
                      <input
                        type={"radio"}
                        id={"All Games"}
                        name="filterGame"
                        onChange={(gameFilter) => setSelectedGame("")}
                      />
                      <label htmlFor={"All Games"}>All Games</label>
                    </div>
                  </div>
                </li>
                {gamesData.map((gameFilter) => (
                  <li key={gameFilter.id}>
                    <div className="filter">
                      <div className="icon">
                        <img
                          src={gameFilter.leagues[0].image_url}
                          alt="lol icon"
                        />
                      </div>
                      <div className="filter-name">
                        <input
                          type={"radio"}
                          id={gameFilter.name}
                          name="filterGame"
                          onChange={(gameFilter) =>
                            setSelectedGame(gameFilter.target.id)
                          }
                        />
                        <label htmlFor={gameFilter.name}>
                          {gameFilter.name}
                        </label>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-9 col-results-list">
              <ul className="horizontal-games-filters">
                {filters.map((filter, index) => (
                  <li key={index}>
                    <div className="filter">
                      <div className="filter-name">
                        <input
                          type={"radio"}
                          id={filter}
                          name="filterRadio"
                          onChange={(filter) =>
                            setSelectedFilter(filter.target.id)
                          }
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
                .filter((game) => game.videogame.name.includes(selectedGame))
                .filter((game) => game.status.includes(selectedFilter))
                .filter((game) =>
                  game.scheduled_at
                    .slice(0, 10)
                    .includes(startDate.toISOString().slice(0, 10))
                )
                .sort((game) => game.league.name)
                .map((game) => (
                  <Game key={game.id} game={game} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
