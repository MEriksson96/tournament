import React, { createContext, ReactNode, useContext, useState } from "react";
import { apiUrl, Player } from "../data/helper";

type QualifiedPlayersContextOutput = {
  qualifiedPlayers: any;
};

type InputProps = {
  children: ReactNode;
};

export const QualifiedPlayersContext = React.createContext(
  {} as QualifiedPlayersContextOutput
);

export const QualifiedPlayersContextProvider = ({ children }: InputProps) => {
  const [qualifiedPlayers, setQualifiedPlayers] = useState([]);

  const getQualifiedPlayers = () => {
    fetch(apiUrl + "/qualifiedForPlayoffs")
      .then((response) => response.json())
      .then((data) => setQualifiedPlayers(data));

    return qualifiedPlayers;
  };

  return (
    <QualifiedPlayersContext.Provider
      value={{ qualifiedPlayers: getQualifiedPlayers() }}
    >
      {children}
    </QualifiedPlayersContext.Provider>
  );
};

export default function useQualifiedPlayers() {
  return useContext(QualifiedPlayersContext);
}
