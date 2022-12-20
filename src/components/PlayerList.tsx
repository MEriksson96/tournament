import React, { Component, useEffect } from "react";
import useHighestScore from "../context/high-score-context";
import usePlayers from "../context/player-context";
import useQualifiedPlayers from "../context/qualified-players-context";
import useRounds from "../context/rounds-context";
import "../style/PlayerList.css";
import LederBoard from "./leder-board";
import UpcomingRounds from "./next-rounds";
import PlayersList from "./players-lst";
import QualifiedPlayers from "./qualified-players";
import Stats from "./tournament-stats";

const PlayerList = (props) => {
  const handleDelete = (name: string) => {
    fetch(props.apiUrl + "/" + name, {
      method: "DELETE",
    }).then(() => {
      props.fetchPlayers();
    });
  };

  return (
    <div className="App">
      <Stats />
      <PlayersList handleDelete={handleDelete} />
    </div>
  );
};

export default PlayerList;
