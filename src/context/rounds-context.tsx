import React, { createContext, ReactNode, useContext, useState } from "react";
import { apiUrl, Player } from "../data/helper";

type RoundsContextOutput = {
  rounds: any;
};

type InputProps = {
  children: ReactNode;
};

export const RoundsContext = React.createContext({} as RoundsContextOutput);

export const RoundsContextProvider = ({ children }: InputProps) => {
  const [allRounds, setRounds] = useState([]);

  const getRounds = () => {
    fetch(apiUrl + "/schema")
      .then((res) => res.json())
      .then((data) => setRounds(data));

    return allRounds;
  };

  return (
    <RoundsContext.Provider value={{ rounds: getRounds() }}>
      {children}
    </RoundsContext.Provider>
  );
};

export default function useRounds() {
  return useContext(RoundsContext);
}
