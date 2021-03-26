import React, { Component } from "react";

const ProfileItem = ({ title, value }) => {
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
      <div style={{ color: "#888888" }}>{value}</div>
    </div>
  );
};
export default ProfileItem;
