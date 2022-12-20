import usePlayers from "../context/player-context";
import useQualifiedPlayers from "../context/qualified-players-context";

const QualifiedPlayers = () => {
  const { qualifiedPlayers } = useQualifiedPlayers();

  return (
    <>
      <h6 className="playoffs-text">Klara för A-slutspel</h6>
      <div className="items">
        <ul className="item-list">
          {qualifiedPlayers.map((player) => (
            <li key={player.Id} className="items-list-item">
              {player.PlayerTeam} <strong>{player.Points}P</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QualifiedPlayers;
