import React from "react";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText";

const HomepageTitle = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <a
        href="https://www.linkedin.com/in/nilacksha-dhanawardhane-722663316/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "white",
          fontSize: "16px",
          fontFamily: "Roboto, sans-serif",
          textDecoration: "none",
        }}
      >
        LinkedIn
      </a>

      <h1
        style={{
          color: "white",
          fontSize: "48px",
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          margin: 0,
        }}
      >
        Nilacksha Dhanawardhane
      </h1>

      <p
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          color: "white",
          fontSize: "15px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          margin: 0,
        }}
      >
        Third Year SWE Student · Melbourne, AU
      </p>
    </div>
  );
};

export default HomepageTitle;
