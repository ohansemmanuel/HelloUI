import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";

const PLANETS = ["Web", "Javascript", "Earth"];

function App() {
  const [activePlanet, setActivePlanet] = useState(PLANETS[0]);
  const handlePlanetUpdate = (event) => {
    setActivePlanet(event.target.textContent);
  };

  return (
    <>
      <img src={logo} alt="hello-world-logo" width="220" height="190" />
      <p>
        Hello World from planet <span className="planet">{activePlanet}</span>
      </p>

      <section>
        {PLANETS.map((planet) => (
          <button
            className={`btn ${planet === activePlanet ? "selected" : ""}`}
            onClick={handlePlanetUpdate}
            key={planet}
          >
            {planet}
          </button>
        ))}
      </section>
    </>
  );
}

export default App;
