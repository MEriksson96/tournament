import React, { useState } from "react";
import "../style/SignUp.css";
import { apiUrl } from "../data/helper";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showsuccess, setShowSuccess] = useState(false);

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleTeam = (e: any) => {
    setTeam(e.target.value);
  };

  const handleAdmin = (e: any) => {
    setIsAdmin(e.target.checked);
  };

  const handleSubmit = (e: any) => {
    if (name === "" || team === "" || (name === "" && team === "")) {
      e.preventDefault();
      setShowError(true);
      setErrorMessage("Vänligen fyll i namn och lag");
      setTimeout(() => {
        setShowError(false);
        setErrorMessage("");
      }, 5000);
    } else {
      e.preventDefault();
      //här sätter vi värdena på de properties som finns i modellen på backend sidan, dessa måste döpas likadant som det som står i modellen.
      var model = {
        Name: name,
        PlayerTeam: team,
        PlayerIsAdmin: isAdmin,
        Points: 0,
      };
      fetch(apiUrl + "/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(model),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data !== 200) {
            setName("");
            setTeam("");
            setIsAdmin(false);
            setShowSuccess(true);
            setSuccessMessage(
              "Ett fel uppstod, vänligen försök igen lite senare"
            );
          } else {
            setName("");
            setTeam("");
            setIsAdmin(false);
            setShowSuccess(true);
            setSuccessMessage("Användaren har registrerats");
          }
        });

      setTimeout(() => {
        setShowSuccess(false);
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <div>
      <header style={headerStyle}>
        <h4 className="header__text">Registrera användare/Logga in</h4>
      </header>
      <div className="container">
        <form className="sign-up__form" onSubmit={handleSubmit}>
          <h5 className="log-in-label">Registrera ny användare</h5>
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
            <small className="form-text text-muted">
              Vänligen fyll i ditt lag
            </small>
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
          <div className="form-group">
            <input
              type="submit"
              value="Registrera"
              className="btn btn-success"
            />
          </div>
          <div className="form-group error__field">
            {showError === true ? (
              <span className="error">{errorMessage}</span>
            ) : (
              ""
            )}
            {showsuccess === true ? (
              <span className="success">{successMessage}</span>
            ) : (
              ""
            )}
          </div>
        </form>

        <div className="login__box">
          <div className="login__header">
            <h5 className="log-in-label">Logga in</h5>
          </div>
          <div className="form-group">
            <Link to="/home">
              <input
                type="button"
                value="Logga in"
                className="btn btn-primary"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
      <footer id="footer" style={footerStyle}>
        <div className="footer__text">&copy; 2020-11-20</div>
      </footer>
    </div>
  );
}

const headerStyle = {
  background: "#333",
  color: "white",
  TextAlign: "center",
  padding: "10px",
  height: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const footerStyle = {
  background: "lightslategrey",
  color: "white",
  TextAlign: "center",
  padding: "10px",
  height: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default SignUp;
