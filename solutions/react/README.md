### Usage

- :brain: Run the application: `npm start` or `yarn start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Notes

- Most frontend libraries include some sort of template engine. For React this is called JSX.

Instead of writing out all button elements as done in the vanilla JS example, with JSX you can carry out interesting computations as seen below:

```diff
+ <section>
- <button class="btn selected">Web</button>
- <button class="btn">Javascript</button>
- <button class="btn">Earth</button>
+       {PLANETS.map((planet) => (
+          <button
+            className={`btn ${planet === activePlanet ? "selected" : ""}`}
+            onClick={handlePlanetUpdate}
+            key={planet}
+          >
+            {planet}
+          </button>
        ))}
+ </section>
```

Also, instead of manually updating the DOM, React uses the VirtualDOM and uses the concept of Props and State to represent UI changes

```diff
+ const [activePlanet, setActivePlanet] = useState(PLANETS[0]);
- const planetEl = document.querySelector(".planet");
- planetEl.textContent = activeButtonEl.textContent;
+ <p>{`Hello World from planet ${activePlanet}`}</p>
```

In the diff above `activePlanet` represents the UI state value being changed by a user's action.
