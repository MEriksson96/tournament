import { apiUrl } from "../data/helper";
import "../style/PlayerList.css";
import PlayersList from "./players-lst";
import Stats from "./tournament-stats";

const PlayerList = () => {
  const handleDelete = (name: string) => {
    fetch(apiUrl + "/" + name, {
      method: "DELETE",
    }).then(() => {
      console.log("deleted");
    });
  };

  return (
    <div className="App">
      <Stats />
      <PlayersList handleDelete={handleDelete} />
    </div>
  );
};

export default PlayerList;
