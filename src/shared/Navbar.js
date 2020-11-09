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
        justifyContent: "space-between",
        margin: "20px",
        height: "30px",
      }}
    >
      <div>Peka.ai</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ padding: "0px 10px" }}
          className={`menu-top ${path === "/" && "menu-active"}`}
          onClick={() => {
            setPath("/");
            router.push("/");
          }}
        >
          Home
        </div>
        <div
          style={{ padding: "0px 10px" }}
          className={`menu-top ${path === "/risk_management" && "menu-active"}`}
          onClick={() => {
            setPath("/risk_management");
            router.push("/risk_management");
          }}
        >
          Risk Management
        </div>
        <div
          style={{ padding: "0px 10px" }}
          className={`menu-top ${
            path === "/about_cancer_breast" && "menu-active"
          }`}
          onClick={() => {
            setPath("/about_cancer_breast");
            router.push("/about_cancer_breast");
          }}
        >
          About Cancer Breast
        </div>
        <div
          style={{ padding: "0px 10px" }}
          className={`menu-top ${path === "/about_us" && "menu-active"}`}
          onClick={() => {
            setPath("/about_us");

            router.push("/about_us");
          }}
        >
          About Us
        </div>
        <div
          style={{ padding: "0px 10px" }}
          className={`menu-top ${path === "/faqs" && "menu-active"}`}
          onClick={() => {
            setPath("/faqs");

            router.push("/faqs");
          }}
        >
          FAQs
        </div>
      </div>
      <div>ChatBot</div>
    </div>
  );
}
