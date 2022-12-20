import "./App.css";
import React, { useState, useEffect } from "react";
import PlayerList from "./components/PlayerList";
import SignUp from "./components/SignUp";
import RoundList from "./components/RoundList";
import EditPlayer from "./components/EditPlayer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PlayersContextProvider } from "./context/player-context";
import { QualifiedPlayersContextProvider } from "./context/qualified-players-context";
import { HighScoreContextProvider } from "./context/high-score-context";
import { RoundsContextProvider } from "./context/rounds-context";
import Rounds from "./components/Rounds";

function App() {
  //componentDidMount och de andra fungerar inte i en function komponent, då får man använda useEffect som körs när komponenten renderas.
  const apiUrl = "http://localhost:60120/api/player";
  const [players, setPlayers] = useState([]);
  const [qualifiedPlayers, setQualifiedPlayers] = useState([]);
  const [upcomingRounds, setUpcomingRounds] = useState([]);
  const [highestScore, setHighestScore] = useState({});

  useEffect(() => {
    fetchPlayers();
    fetchQualifiedPlayers();
    fetchNextRounds();
    setTimeout(() => {
      fetchHighestScore();
    }, 3000);
  }, []);

  const fetchPlayers = () => {
    fetch(apiUrl + "/getUsers")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  };

  const fetchQualifiedPlayers = () => {
    fetch(apiUrl + "/qualifiedForPlayoffs")
      .then((response) => response.json())
      .then((data) => setQualifiedPlayers(data));
  };

  const fetchNextRounds = () => {
    fetch(apiUrl + "/schema")
      .then((res) => res.json())
      .then((data) =>
        setUpcomingRounds(
          data.filter((x) => x.HasBeenPlayed === false).slice(0, 2)
        )
      );
  };

  const fetchHighestScore = () => {
    fetch(apiUrl + "/getHighestPoints")
      .then((res) => res.json())
      .then((data) => setHighestScore(data));
  };

  return (
    <PlayersContextProvider>
      <QualifiedPlayersContextProvider>
        <HighScoreContextProvider>
          <RoundsContextProvider>
            <Router>
              <Route exact path="/">
                <SignUp apiUrl={apiUrl} />
              </Route>

              <Route path="/home">
                <Header
                  apiUrl={apiUrl}
                  setPlayers={setPlayers}
                  setHighestScore={setHighestScore}
                  setQualifiedPlayers={setQualifiedPlayers}
                  setUpcomingRounds={setUpcomingRounds}
                />
                <PlayerList />
              </Route>
              <Route path="/games">
                <Header
                  apiUrl={apiUrl}
                  setPlayers={setPlayers}
                  setHighestScore={setHighestScore}
                  setQualifiedPlayers={setQualifiedPlayers}
                  setUpcomingRounds={setUpcomingRounds}
                />
                <Rounds />
              </Route>
              <Route path="/update">
                <Header
                  apiUrl={apiUrl}
                  setPlayers={setPlayers}
                  setHighestScore={setHighestScore}
                  setQualifiedPlayers={setQualifiedPlayers}
                  setUpcomingRounds={setUpcomingRounds}
                />
                <EditPlayer
                  players={players}
                  apiUrl={apiUrl}
                  setPlayers={setPlayers}
                />
              </Route>
            </Router>
          </RoundsContextProvider>
        </HighScoreContextProvider>
      </QualifiedPlayersContextProvider>
    </PlayersContextProvider>
  );
}

export default App;
