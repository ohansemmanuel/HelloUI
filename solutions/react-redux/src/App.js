import React from "react";
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.png";
import "./App.css";

const PLANETS = ["Web", "Javascript", "Earth"];

const planetsReducer = (state = PLANETS[0], { type, payload }) =>
  type === "SET_PLANET" ? payload : state;

export const store = createStore(planetsReducer);

function App() {
  const dispatch = useDispatch();
  const activePlanet = useSelector((v) => v);

  const handlePlanetUpdate = (event) => {
    dispatch({ type: "SET_PLANET", payload: event.target.textContent });
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
