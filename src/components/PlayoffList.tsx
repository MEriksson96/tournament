import React, { useEffect, useState } from "react";
import usePlayOff from "../context/playoffs-context";
import { apiUrl } from "../data/helper";
import "../style/PlayoffList.css";

function PlayoffList() {
  const { playOffs } = usePlayOff();

  return (
    <div>
      <p className="title">Slutspel | GRÖN - a-slutspel | RÖD - b-slutspel</p>
      <div className="playoff__container">
        {playOffs.map((x: any) => (
          <div className="playoff__item">{x.PlayerTeam}</div>
        ))}
      </div>
    </div>
  );
}

export default PlayoffList;
