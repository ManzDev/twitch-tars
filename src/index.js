import "./components/TARSRobot.js";

const tars = document.querySelector("tars-robot");
const [spinButton, walkButton, runButton] = document.querySelectorAll("button");

spinButton.addEventListener("click", () => tars.classList.toggle("spin"));
walkButton.addEventListener("click", () => tars.classList.toggle("walk"));
runButton.addEventListener("click", () => tars.classList.toggle("run"));
