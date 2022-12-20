import React, { createContext, ReactNode, useContext, useState } from "react";
import { apiUrl, Player } from "../data/helper";

type PalyersContextOutput = {
  players: Player[];
};

type InputProps = {
  children: ReactNode;
};

export const PlayersContext = React.createContext({} as PalyersContextOutput);

export const PlayersContextProvider = ({ children }: InputProps) => {
  const [returnedPlayers, setReturnedPlayers] = useState([]);
  const getPlayers = (): Player[] => {
    fetch(apiUrl + "/getUsers")
      .then((response) => response.json())
      .then((data) => setReturnedPlayers(data));

    return returnedPlayers;
  };

  return (
    <PlayersContext.Provider value={{ players: getPlayers() }}>
      {children}
    </PlayersContext.Provider>
  );
};

export default function usePlayers() {
  return useContext(PlayersContext);
}
