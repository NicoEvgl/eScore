import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";

const GameSection = ({ game }) => {
  let teamNames = [];
  for (let i = 0; i < game.opponents.length; i++) {
    teamNames.push(game.opponents[i].opponent.name);
  }

  let scores = [];
  for (let i = 0; i < game.results.length; i++) {
    scores.push(game.results[i].score);
  }

  return (
    <div className="game-section">
      <div className="game-section-title">{game.videogame.name}</div>
      <div className="competition-section">
        <div className="competition-section-title">
          <h2 className="competition-name"> {game.league.name}</h2>
          <a href={game.official_stream_url} className="stream-link">
            <MdOutlineLiveTv className="stream-link-icon" />
            <span className="hide-visually">stream</span>
          </a>
        </div>
        <ul className="global-scoreboard">
          <li>
            <div className="match-row live">
              <div className="status-tag">{game.status}</div>
              <div className="date">{game.scheduled_at.slice(11, 16)}</div>
              <div className="scoreboard">
                <div className="team">
                  <div className="team-name">{teamNames[0]}</div>
                </div>
                <div className="score-section">
                  <div className="score">{scores[0]}</div>
                  <div className="vs-tag">vs</div>
                  <div className="score">{scores[1]}</div>
                </div>
                <div className="team">
                  <div className="team-name">{teamNames[1]}</div>
                </div>
              </div>
              <div className="tournament-section">
                <div className="tournament-step" title="Group Stage">
                  BestOf : {game.number_of_games}
                </div>
                <div className="tournament-logo">
                  <img
                    src={game.league.image_url}
                    alt="bts pro series logo"
                    width="40"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameSection;
