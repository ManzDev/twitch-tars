import "./components/TARSRobot.js";

const tars = document.querySelector("tars-robot");
const [spinButton, walkButton, runButton] = document.querySelectorAll("button");

spinButton.addEventListener("click", () => {
  spinButton.classList.toggle("active");
  tars.classList.toggle("spin");
});
walkButton.addEventListener("click", () => {
  walkButton.classList.toggle("active");
  tars.classList.toggle("walk");
});
runButton.addEventListener("click", () => {
  runButton.classList.toggle("active");
  tars.classList.toggle("run");
});
