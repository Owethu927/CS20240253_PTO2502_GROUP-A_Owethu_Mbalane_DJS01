import { createPodastCard } from "./components/createPodastCard.js";
import { createModal } from "./components/createModal.js";

/**
 * grid render- responsible for creating the grids
 *
 * @principle it is a single responsibility principle that manages the layout and rendering only
 */

export const createGrid = () => {
  const container = document.getElementById("podcastGrid");

  return {
    /**
     * Render a list of podcast cards into grids
     *
     * @param {objects[]} - array of podcast objects
     */

    render(podcastList) {
      container.innerHTML = "";
      podcastList.forEach((p) => {
        const card = createPodastCard(p, createModal.open);
        container.appendChild(card);
      });
    },
  };
};
