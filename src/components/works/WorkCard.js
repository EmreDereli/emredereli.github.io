import React, { Component } from "react";
import "./WorkCard.css";

export default function WorkCard({ title, link, img, linkAppStore }) {
  return (
    <div className="workCard">
      <div>
        <div className="titleApp">{title}</div>

        <img src={img} style={{ width: "60%" }}></img>
      </div>

      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div className="showButton" onClick={() => window.open(link)}>
          Play Store
        </div>
        {linkAppStore && (
          <div className="showButton" onClick={() => window.open(linkAppStore)}>
            App Store
          </div>
        )}
      </div>
    </div>
  );
}
