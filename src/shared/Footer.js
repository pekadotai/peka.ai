import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        color: "#fff",
      }}
    >
      <div style={{}}>
        <div>Who us?</div>
        <div>M. Idrus Salam</div>
        <div>Rangga Yudhistira Pratama</div>
        <div>Fitri Annissa</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div>About Peka.ai</div>
        <div>Peka.ai is ...</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div>Keep connected</div>
        <div>Social media</div>
      </div>
    </div>
  );
}
