import React from "react";
import { memo } from "react";
import img from "../assets/ayushphotu.jpg";
import fivestar from "../assets/fivestar.svg";
const Card = function ({ minor, name, major, source }) {
  // const stringg = source
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      <div
        className="card-img"
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <img
          src={img}
          alt="card-img"
          style={{ borderRadius: "50%", width: "6rem", height: "6rem" }}
        ></img>
      </div>
      <div className="card-major">
        <h1>
          <b>{major}</b>
        </h1>
      </div>
      <div className="card-minor">
        <p style={{ textAlign: "center" }}>{minor}</p>
      </div>
      <div className="five-star">
        <img src={fivestar} alt="stars" />
      </div>
      <div className="card-name">
        <p>{name}</p>
      </div>
    </div>
  );
};
export default memo(Card);
