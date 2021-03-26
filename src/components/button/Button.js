import React from "react";
import "./Button.css";

export default function Button({ onClick }) {
  return (
    <div onClick={onClick} className="morebutton">
      More About Me
    </div>
  );
}
