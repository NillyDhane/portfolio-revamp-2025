// App.jsx - Clean version
import React from "react";
import Silk from "./blocks/Backgrounds/Silk/Silk";
import HomepageTitle from "./components/titleName";
import PixelTrail from "./blocks/Animations/PixelTrail/PixelTrail";

function App() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <HomepageTitle />

      <Silk
        speed={5}
        scale={1}
        color="#282729"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  );
}

export default App;
