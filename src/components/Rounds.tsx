import React, { useEffect, useState } from "react";
import useRounds from "../context/rounds-context";
import { apiUrl } from "../data/helper";
import "../style/Round.css";
import PlayoffList from "./PlayoffList";
import RoundListItem from "./round-item";

const Rounds = () => {
  const [showPlayoffs, setShowPlayoffs] = useState(false);
  const { rounds } = useRounds();

  useEffect(() => {
    if (rounds.every((x) => x.HasBeenPlayed)) {
      setShowPlayoffs(true);
    } else {
      setShowPlayoffs(false);
    }
  }, [rounds]);

  return (
    <div>
      <div className="container-for-television">
        <div className="items-for-tv1">
          <h3>TV1</h3>
        </div>
        <div className="help-text">
          <h6>Tryck på en match för att lägga till ett resultat</h6>
        </div>
        <div className="items-for-tv2">
          <h3>TV2</h3>
        </div>
      </div>

      {showPlayoffs === true ? <PlayoffList /> : ""}

      <div className="container-div">
        {rounds.map((rnd, index) => (
          <RoundListItem round={rnd} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Rounds;
