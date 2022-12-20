import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../data/helper";
import "../style/Header.css";

const Header = () => {
  const [deleteIsPressed, setDeleteIsPressed] = useState(false);

  const hasClickedDelete = () => {
    setDeleteIsPressed(true);
  };

  const cancelDelete = () => {
    setDeleteIsPressed(false);
  };

  const deleteTournament = () => {
    fetch(apiUrl + "/deleteSchema/num", {
      method: "DELETE",
    }).then(() => {
      console.log("deleted");
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
};

const headerStyle = {
  background: "#333",
  color: "white",
  TextAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
};

export default Header;
