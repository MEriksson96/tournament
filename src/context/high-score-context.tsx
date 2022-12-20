import React, { ReactNode } from "react";
import { useContext } from "react";
import { useState } from "react";
import { apiUrl } from "../data/helper";

type HighScoreContextOutPut = {
  highestScore: any;
};

type InputProps = {
  children: ReactNode;
};

export const HighScoreContext = React.createContext(
  {} as HighScoreContextOutPut
);

export const HighScoreContextProvider = ({ children }: InputProps) => {
  const [leader, setLeader] = useState();

  const fetchHighestScore = () => {
    fetch(apiUrl + "/getHighestPoints")
      .then((res) => res.json())
      .then((data) => setLeader(data));

    return leader;
  };

  return (
    <HighScoreContext.Provider value={{ highestScore: fetchHighestScore }}>
      {children}
    </HighScoreContext.Provider>
  );
};

export default function useHighestScore() {
  return useContext(HighScoreContext);
}
