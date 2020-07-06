### Usage

- :brain: Run the application: `npm start` or `yarn start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Notes

Most things remain the same when compared to the React solution. Apart from the introduction of a `Provider` and swapping `useState` for `useRecoilState`, creating an **atom** is the only alien concept.

```js
const activePlanetAtom = atom({
  key: "activePlanet",
  default: PLANETS[0],
});
```

[Atoms](https://recoiljs.org/docs/basic-tutorial/atoms) are the building blocks for global state in Recoil.
