import React, { useEffect, useState } from "react";
import { apiUrl } from "../data/helper";
import "../style/PlayoffList.css";

function PlayoffList() {
  const [playOffs, setPlayOffs] = useState([]);

  useEffect(() => {
    fetchPlayoff();
  }, []);
  const fetchPlayoff = () => {
    fetch(apiUrl + "/finalPlayoffs")
      .then((res) => res.json())
      .then((data) => setPlayOffs(data));
  };
  return (
    <div>
      <p className="title">Slutspel | GRÖN - a-slutspel | RÖD - b-slutspel</p>
      <div className="playoff__container">
        {playOffs.map((x) => (
          <div className="playoff__item">{x.PlayerTeam}</div>
        ))}
      </div>
    </div>
  );
}

export default PlayoffList;
