import { podcasts } from "./data.js";
import { createModal } from "./components/createModal.js";
import { createGrid } from "./views/createGrid.js";

function init() {
  document.getElementById("myModal");
  document.addEventListener("click", createModal.close);
  const grid = createGrid();
  grid.render(podcasts);
}

init();
