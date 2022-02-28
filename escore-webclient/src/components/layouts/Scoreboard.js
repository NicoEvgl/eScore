import React from "react";
import HorizontalGamesFilters from "../layouts/HorizontalGamesFilters";
import DateFilter from "../layouts/DateFilter";
import { NavLink } from "react-router-dom";
import { MdOutlineLiveTv } from "react-icons/md";

const Scoreboard = () => {
  return (
    <div className="col-9 col-results-list">
      <HorizontalGamesFilters />
      <DateFilter />
      <div className="game-section">
        <div className="game-section-title">Dota 2</div>
        <div className="competition-section">
          <div className="competition-section-title">
            <h2 className="competition-name">
              <span>"BTS Pro Series 9"</span>
            </h2>
            <NavLink to={"/"} className="stream-link">
              <MdOutlineLiveTv className="stream-link-icon" />
              <span className="hide-visually">stream</span>
            </NavLink>
          </div>
          <ul className="global-scoreboard">
            <li>
              <div className="match-row live" data-id="">
                <div className="status-tag">Live</div>
                <div className="scoreboard">
                  <div className="team">
                    <div className="team-name">Beastcoast</div>
                    <div className="team-logo">
                      <img
                        src=""
                        alt="beastcoast-icon"
                        width="50"
                        height="50"
                      />
                    </div>
                  </div>
                  <div className="score-section">
                    <div className="score">0</div>
                    <div className="vs-tag">vs</div>
                    <div className="score-winning">1</div>
                  </div>
                  <div className="team">
                    <div className="team-logo">
                      <img
                        src=""
                        alt="furiajovem-icon"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="team-name">Furia Jovem</div>
                  </div>
                </div>
                <div className="tournament-section">
                  <div className="tournament-step" title="Group Stage">
                    Group Stage
                  </div>
                  <div className="tournament-logo">
                    <img
                      src="https://cdn.pandascore.co/images/league/image/4360/600px-BTS_Pro_Series_logo.png"
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
        <div className="competition-section">
          <div className="competition-section-title">
            <h2 className="competition-name">
              <span>"Battle of Bifrost"</span>
            </h2>
            <NavLink to={"/"} className="stream-link">
              <MdOutlineLiveTv className="stream-link-icon" />
              <span className="hide-visually">stream</span>
            </NavLink>
          </div>
          <ul className="global-scoreboard">
            <li>
              <div className="match-row finished" data-id="">
                <div className="status-tag">Terminé</div>
                <div className="scoreboard">
                  <div className="team">
                    <div className="team-name">Red Flower</div>
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/130078/145px_red_flower_lightmode.png"
                        alt="Red Flower"
                        width="50"
                        height="50"
                      />
                    </div>
                  </div>
                  <div className="score-section">
                    <div className="score">0</div>
                    <div className="vs-tag">vs</div>
                    <div className="score winning">2</div>
                  </div>
                  <div className="team">
                    <div className="team-logo">
                      <img
                        src="/upload/admin/Divers/Logo_jeux_petits/game-dota.svg"
                        alt="Kinkalow"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="team-name">Kinkalow</div>
                  </div>
                </div>
                <div className="tournament-section">
                  <div className="tournament-step" title="Group Stage">
                    Groupe Stage
                  </div>
                  <div className="tournament-logo">
                    <img
                      src="https://cdn.pandascore.co/images/league/image/4741/e6568.png"
                      alt="Group Stage"
                      width="40"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="match-row finished" data-id="">
                <div className="status-tag">Terminé</div>
                <div className="scoreboard">
                  <div className="team">
                    <div className="team-name">Eternal</div>
                    <div className="team-logo">
                      <img src="" alt="Eternal" width="50" height="50" />
                    </div>
                  </div>
                  <div className="score-section">
                    <div className="score">1</div>
                    <div className="vs-tag">vs</div>
                    <div className="score winning">2</div>
                  </div>
                  <div className="team">
                    <div className="team-logo">
                      <img src="" alt="Kinkalow" width="50" height="50" />
                    </div>
                    <div className="team-name">Team Scorpion</div>
                  </div>
                </div>
                <div className="tournament-section">
                  <div className="tournament-step" title="Group Stage">
                    Groupe Stage
                  </div>
                  <div className="tournament-logo">
                    <img
                      src="https://cdn.pandascore.co/images/league/image/4741/e6568.png"
                      alt="Group Stage"
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
      <div className="game-section">
        <div className="game-section-title">League Of Legends</div>
        <div className="competition-section">
          <div className="competition-section-title">
            <h2 className="competition-name">
              <span>"NEST"</span>
            </h2>
            <NavLink to={"/"} className="stream-link">
              <MdOutlineLiveTv className="stream-link-icon" />
              <span className="hide-visually">stream</span>
            </NavLink>
          </div>
          <ul class="global-scoreboard">
            <li>
              <div className="match-row live" data-id="">
                <div className="status-tag">Live</div>
                <div className="scoreboard">
                  <div className="team">
                    <div className="team-name">Team WE</div>
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/2574/300px-Team_WElogo_square.png"
                        alt="Team WE"
                        width="50"
                        height="50"
                      />
                    </div>
                  </div>
                  <div className="score-section">
                    <div className="score winning">1</div>
                    <div className="vs-tag">vs</div>
                    <div className="score">0</div>
                  </div>
                  <div className="team">
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/411/invictus_gaminglogo_square.png"
                        alt="Invictus Gaming"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="team-name">Invictus Gaming</div>
                  </div>
                </div>
                <div className="tournament-section">
                  <div className="tournament-step" title="Playoffs">
                    Playoffs
                  </div>
                  <div className="tournament-logo">
                    <img
                      src="https://cdn.pandascore.co/images/league/image/4225/NEST.png"
                      alt="Playoffs"
                      width="40"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="competition-section">
          <div className="competition-section-title">
            <h2 className="competition-name">
              <span>"CBLOL Academy Split 1"</span>
            </h2>
            <NavLink to={"/"} className="stream-link">
              <MdOutlineLiveTv className="stream-link-icon" />
              <span className="hide-visually">stream</span>
            </NavLink>
          </div>
          <ul className="global-scoreboard">
            <li>
              <div className="match-row finished" data-id="">
                <div className="status-tag">Terminé</div>
                <div className="scoreboard">
                  <div className="team">
                    <div className="team-name">paiN Gaming Academy</div>
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/128529/pai_n_gaminglogo_square.png"
                        alt="paiN Gaming Academy"
                        width="50"
                        height="50"
                      />
                    </div>
                  </div>
                  <div className="score-section">
                    <div className="score winning">1</div>
                    <div className="vs-tag">vs</div>
                    <div className="score">0</div>
                  </div>
                  <div className="team">
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/128523/furia_esportslogo_square.png"
                        alt="FURIA Academy"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="team-name">FURIA Academy</div>
                  </div>
                </div>
                <div className="tournament-section">
                  <div className="tournament-step" title="Regular">
                    Regular
                  </div>
                  <div className="tournament-logo">
                    <img
                      src="https://cdn.pandascore.co/images/league/image/4533/CBLOL_Academy_2021.png"
                      alt="Regular"
                      width="40"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="match-row finished" data-id="">
                <div className="status-tag">Terminé</div>
                <div className="scoreboard">
                  <div className="team">
                    <div className="team-name">INTZ Academy</div>
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/128524/intz_academylogo_square.png"
                        alt="INTZ Academy"
                        width="50"
                        height="50"
                      />
                    </div>
                  </div>
                  <div className="score-section">
                    <div className="score">0</div>
                    <div className="vs-tag">vs</div>
                    <div className="score winning">1</div>
                  </div>
                  <div className="team">
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/128522/flamengo_esportslogo_square.png"
                        alt="Flamengo Academy"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="team-name">Flamengo Academy</div>
                  </div>
                </div>
                <div className="tournament-section">
                  <div className="tournament-step" title="Regular">
                    Regular
                  </div>
                  <div className="tournament-logo">
                    <img
                      src="https://cdn.pandascore.co/images/league/image/4533/CBLOL_Academy_2021.png"
                      alt="Regular"
                      width="40"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="match-row finished" data-id="">
                <div className="status-tag">Terminé</div>
                <div className="scoreboard">
                  <div className="team">
                    <div className="team-name">paiN Gaming Academy</div>
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/128529/pai_n_gaminglogo_square.png"
                        alt="paiN Gaming Academy"
                        width="50"
                        height="50"
                      />
                    </div>
                  </div>
                  <div className="score-section">
                    <div className="score winning">1</div>
                    <div className="vs-tag">vs</div>
                    <div className="score">0</div>
                  </div>
                  <div className="team">
                    <div className="team-logo">
                      <img
                        src="https://cdn.pandascore.co/images/team/image/128523/furia_esportslogo_square.png"
                        alt="FURIA Academy"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="team-name">FURIA Academy</div>
                  </div>
                </div>
                <div className="tournament-section">
                  <div className="tournament-step" title="Regular">
                    Regular
                  </div>
                  <div className="tournament-logo">
                    <img
                      src="https://cdn.pandascore.co/images/league/image/4533/CBLOL_Academy_2021.png"
                      alt="Regular"
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
    </div>
  );
};

export default Scoreboard;
