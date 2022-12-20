import { useState } from "react";
import usePlayers from "../context/player-context";
import { apiUrl } from "../data/helper";
import "../style/EditPlayer.css";
import EditPlayerForm, { UpdatedPlayer } from "./edit-player-form";
import PlayerUpdateList from "./player-update-list";

const EditPlayer = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [playerId, setPlayerId] = useState(0);
  const { players } = usePlayers();

  const showEditForm = (player: any) => {
    if (player === null) {
      return;
    }
    setShowForm(true);
    setName(player.Name);
    setTeam(player.PlayerTeam);
    setIsAdmin(player.PlayerIsAdmin);
    setPlayerId(player.Id);
  };

  const updatePlayer = (values: UpdatedPlayer, e: any) => {
    e.preventDefault();
    var obj = {
      Id: playerId,
      Name: values.name,
      PlayerTeam: values.team,
      PlayerIsAdmin: values.isAdmin,
    };
    fetch(apiUrl + "/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name: obj.Name,
        PlayerTeam: obj.PlayerTeam,
        PlayerIsAdmin: obj.PlayerIsAdmin,
        Id: obj.Id,
      }),
    }).then(() => {
      setShowForm(false);
    });
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="nav-text navbar-brand mb-0 h1">
          Uppdatera information
        </span>
      </nav>
      <div className="container player-list">
        <PlayerUpdateList showEditForm={showEditForm} />

        <div className="row">
          {showForm === true ? (
            <EditPlayerForm
              name={name}
              team={team}
              isAdmin={isAdmin}
              updatePlayer={updatePlayer}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default EditPlayer;
