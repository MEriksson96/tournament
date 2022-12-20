import useHighestScore from "../context/high-score-context";
import usePlayers from "../context/player-context";

const LederBoard = () => {
  const { players } = usePlayers();
  const { highestScore } = useHighestScore();
  return (
    <div className="points-container">
      <div className="points-text">
        {players.every((player) => player.Points === highestScore.Points) ? (
          "Alla lag har lika mycket poäng"
        ) : highestScore.Points === null ? (
          "Inga poäng registrerade än"
        ) : highestScore.Points ? (
          <span>
            Laget med högst poäng just nu är{" "}
            <strong>{highestScore.PlayerTeam}</strong> som leder med{" "}
            <strong>{highestScore.Points}</strong> poäng
          </span>
        ) : (
          "Alla lag har lika mycket poäng"
        )}
      </div>
    </div>
  );
};

export default LederBoard;
