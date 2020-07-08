import React from "react";
import { atom, useRecoilState } from "recoil";
import logo from "./logo.png";
import "./App.css";

const PLANETS = ["Web", "Javascript", "Earth"];

const activePlanetAtom = atom({
  key: "activePlanet",
  default: PLANETS[0],
});

function App() {
  const [activePlanet, setActivePlanet] = useRecoilState(activePlanetAtom);

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
