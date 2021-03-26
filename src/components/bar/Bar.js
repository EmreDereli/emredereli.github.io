import React from "react";

export default function Bar({ title, value }) {
  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        marginBottom: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 10 }}>{title}</div>
      <div style={{ backgroundColor: "#e5e5e5", width: "100%", height: 5 }}>
        <div
          style={{ backgroundColor: "black", width: `${value}%`, height: 5 }}
        ></div>
      </div>
    </div>
  );
}
