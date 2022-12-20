import React, { ReactNode, useContext, useState } from "react";
import { apiUrl, Player } from "../data/helper";

type PlayOffContextOutput = {
  playOffs: any;
};

type InputProps = {
  children: ReactNode;
};

export const PlayOffContext = React.createContext({} as PlayOffContextOutput);

export const PlayOffContextProvider = ({ children }: InputProps) => {
  const [returnedPlayOffs, setPlayOffs] = useState([]);

  const fetchPlayoff = () => {
    fetch(apiUrl + "/finalPlayoffs")
      .then((res) => res.json())
      .then((data) => setPlayOffs(data));

    return returnedPlayOffs;
  };
  return (
    <PlayOffContext.Provider value={{ playOffs: fetchPlayoff() }}>
      {children}
    </PlayOffContext.Provider>
  );
};

export default function usePlayOff() {
  return useContext(PlayOffContext);
}
