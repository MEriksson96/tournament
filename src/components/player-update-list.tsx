import usePlayers from "../context/player-context";

type Props = {
  showEditForm: (player: any) => void;
};
const PlayerUpdateList = ({ showEditForm }: Props) => {
  const { players } = usePlayers();

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Spelare</th>
            <th scope="col">Lag</th>
            <th scope="col">Admin</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.Id}>
              <td>{index + 1}</td>
              <td>{player.Name}</td>
              <td>{player.PlayerTeam}</td>
              <input type="checkbox" checked={player.PlayerIsAdmin} />
              <td>{player.PlayerIsAdmin === true ? "true" : "false"}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    showEditForm(player);
                  }}
                >
                  Uppdatera
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PlayerUpdateList;
