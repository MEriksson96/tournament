import usePlayers from "../context/player-context";

type Props = {
  handleDelete: (name: string) => void;
};

const PlayersList = ({ handleDelete }: Props) => {
  const { players } = usePlayers();
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Lag</th>
          <th scope="col">Spelade Matcher</th>
          <th scope="col">Poäng</th>
          <th scope="col">Gjorda mål</th>
          <th scope="col">Insläppta mål</th>
          <th scope="col">+-</th>
          <th scope="col">Ta bort</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.Id}>
            <td>{player.PlayerTeam}</td>
            <td>{player.GamesPlayed}</td>
            <td>{player.Points}</td>
            <td>{player.ScoredGoals}</td>
            <td>{player.ConcededGoals}</td>
            <td>{player.Diff}</td>
            <td>
              <button
                onClick={() => {
                  handleDelete(player.Name);
                }}
                className="btn btn-danger"
                type="button"
              >
                Ta bort
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayersList;
