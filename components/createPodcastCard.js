import { podcasts } from "../data";

function createPodastCardGrid(podcast) {
  const card = document.createElement("div");
  card.innerHTML = `
    <img>
    <h3>${podcast.title}</h3>
    <p>${podcast.seasons}</p>
    <p>Genre: ${podcast.genre.join(",")}</p>`;

  card.addEventListener("click", () => {
    aleart(`clicked on the podcast:${podcast.title}`);
  });
  return card;
}
