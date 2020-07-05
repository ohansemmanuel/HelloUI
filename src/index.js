document.querySelectorAll("button").forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    const activeButtonEl = event.target;

    // change text content
    const planetEl = document.querySelector(".planet");
    planetEl.textContent = activeButtonEl.textContent;

    // remove any btn .selected class
    const allButtonsEl = document.querySelectorAll(".btn");
    allButtonsEl.forEach((btn) => btn.classList.remove("selected"));

    // add selected class to clicked button
    activeButtonEl.classList.add("selected");
  });
});
