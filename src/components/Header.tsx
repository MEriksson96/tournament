import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

function Header(props) {
  const [deleteIsPressed, setDeleteIsPressed] = useState(false);

  const hasClickedDelete = () => {
    setDeleteIsPressed(true);
  };

  const cancelDelete = () => {
    setDeleteIsPressed(false);
  };

  const deleteTournament = () => {
    fetch(props.apiUrl + "/deleteSchema/num", {
      method: "DELETE",
    }).then(() => {
      fetch(props.apiUrl + "/getUsers")
        .then((res) => res.json())
        .then((data) => {
          props.setPlayers(data);
          props.setHighestScore({});
          props.setQualifiedPlayers([]);
          props.setUpcomingRounds([]);
          setDeleteIsPressed(false);
        });
    });
  };

  return (
    <header style={headerStyle}>
      <h1>Turnering</h1>
      <Link style={linkStyle} to="/test">
        <strong>Test</strong>
      </Link>
      <Link style={linkStyle} to="/home">
        <strong>Hem</strong>
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/games">
        <strong>Matcher</strong>
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/update">
        <strong className="finish__tournament">Uppdatera</strong>
      </Link>{" "}
      |{" "}
      <strong className="finish__tournament" onClick={hasClickedDelete}>
        Avsluta
      </strong>{" "}
      |{" "}
      <Link style={linkStyle} to="/">
        <strong>Logga ut</strong>
      </Link>{" "}
      {deleteIsPressed === true ? (
        <div>
          <strong className="finish__tournament" onClick={deleteTournament}>
            Ja
          </strong>{" "}
          |{" "}
          <strong className="finish__tournament" onClick={cancelDelete}>
            Nej
          </strong>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
};

export default Header;
