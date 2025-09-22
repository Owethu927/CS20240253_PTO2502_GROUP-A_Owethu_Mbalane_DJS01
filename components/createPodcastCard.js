import { genreService } from "../utils/genreService.js";
import { dataUtils } from "../utils/dateUtils.js";

/**
 * Podcast Card Factory - Creates a DOM element for a podcast preview card.
 *
 * @principle SRP - Only responsible for rendering one podcast card.
 * @principle OCP - Card rendering logic can be extended (e.g., add badges or icons) without changing other modules.
 *
 * @param {Object} podcast - Podcast object.
 * @param {Function} onClick - Function to call on card click.
 * @returns {HTMLDivElement} The constructed card element.
 */

export function createPodastCardGrid(podcast, onClick) {
  const genreNames = genreService.getNames(podcast.genre);
  // Creating a div
  const createCard = document.createElement("div");
  createCard.className("podcast-card");
  // adding the inner HTML using template literals
  createCard.innerHTML = `
   <img class="podcast-cover" src="${podcast.image}" alt="${podcast.title}">
   <div>
    <h3>${podcast.title}</h3>
    <p><strong>Seasons:</strong>${
      podcast.seasons === 1 ? "1 season" : podcast.seasons + "seasons"
    }</p>
    <div class= "podcast-genre">
    ${podcast.genre.map((g) => `<span class="genre-tag">${g}</span>`.join(""))}
    </div>
    <p><strong>Last Updated</strong>${podcast.lastUpdated}</p>
    </div>`;

  //Add an event listener

  createCard.addEventListener("click", () => {
    if (onClick) {
      onClick(podcast);
    } else {
      console.log(`Podcast clicked:${podcast.title}`);
    }
  });
  return createCard;
}
