import { useState } from "react";
import useRounds from "../context/rounds-context";
import { apiUrl } from "../data/helper";
import Resultboard from "./result-board";
import UpdateScore from "./update-score";

type Props = {
  round: any;
  index: number;
};

const RoundListItem = ({ round, index }: Props) => {
  const [boxRound, setBoxRound] = useState("");
  const [leftSideGoals, setLeftSideGoals] = useState(0);
  const [rightSideGoals, setRightSideGoals] = useState(0);
  const { rounds } = useRounds();

  const showResultBoard = (round, isPlayed) => {
    if (isPlayed === true) {
      return;
    }
    setBoxRound(round);
    setLeftSideGoals(0);
    setRightSideGoals(0);
  };

  const handleLeftSideGoals = (e) => {
    setLeftSideGoals(e.target.value);
  };

  const handleRightSideGoals = (e) => {
    setRightSideGoals(e.target.value);
  };

  const submitResult = (round, e) => {
    e.preventDefault();
    if (
      leftSideGoals > 15 ||
      rightSideGoals > 15 ||
      leftSideGoals === null ||
      rightSideGoals === null
    ) {
      return;
    }

    var player = round.split("-");
    var player1 = player[0].trim();
    var player2 = player[1].trim();

    fetch(apiUrl + "/registerResult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leftSidePlayer: player1,
        rightSidePlayer: player2,
        leftSideGoals: leftSideGoals,
        rightSideGoals: rightSideGoals,
      }),
    }).then(() => {
      setBoxRound("");
    });
  };

  return (
    <div
      key={round.Id}
      className="container-div-item"
      onClick={() => {
        showResultBoard(round.Round, round.HasBeenPlayed);
      }}
    >
      <div className="fix">
        <Resultboard round={round} index={index} />
        <UpdateScore
          boxRound={boxRound}
          round={round}
          leftSideGoals={leftSideGoals}
          rightSideGoals={rightSideGoals}
          handleLeftSideGoals={handleLeftSideGoals}
          handleRightSideGoals={handleRightSideGoals}
          submitResult={submitResult}
        />
      </div>
    </div>
  );
};

export default RoundListItem;
