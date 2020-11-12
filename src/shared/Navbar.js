import React, { useState } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const router = useHistory();

  const [path, setPath] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        // height: "30px",
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
    >
      <h1>Welcome to Peka.ai</h1>
    </div>
  );
}
