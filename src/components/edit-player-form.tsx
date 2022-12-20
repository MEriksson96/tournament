import { useState } from "react";

export type UpdatedPlayer = {
  name: string;
  team: string;
  isAdmin: boolean;
};

type Props = {
  name: string;
  team: string;
  isAdmin: boolean;
  updatePlayer: (values: UpdatedPlayer, e: any) => void;
};

const EditPlayerForm = ({ name, team, isAdmin, updatePlayer }: Props) => {
  const [updatedName, setName] = useState("");
  const [updatedTeam, setTeam] = useState("");
  const [updatedIsAdmin, setIsAdmin] = useState(false);
  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleTeam = (e: any) => {
    setTeam(e.target.value);
  };

  const handleAdmin = (e: any) => {
    setIsAdmin(e.target.checked);
  };

  const submit = (e: any) => {
    const values: UpdatedPlayer = {
      name: updatedName,
      team: updatedTeam,
      isAdmin: updatedIsAdmin,
    };

    updatePlayer(values, e);
  };
  return (
    <form className="edit-form" autoComplete="off">
      <div className="form-group">
        <label>Namn</label>
        <input
          type="text"
          value={name}
          className="form-control"
          onChange={handleName}
        />
        <small className="form-text text-muted">
          Vänligen fyll i ditt namn
        </small>
      </div>
      <div className="form-group">
        <label>Lag</label>
        <input
          type="text"
          value={team}
          className="form-control"
          onChange={handleTeam}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isAdmin}
          onChange={handleAdmin}
        />
        <label className="form-check-label">Admin</label>
      </div>
      <div className="w-100"></div>
      <div className="form-group">
        <input
          type="button"
          className="btn btn-success submit__btn"
          value="Uppdatera"
          onClick={(e) => {
            submit(e);
          }}
        />
      </div>
    </form>
  );
};

export default EditPlayerForm;
