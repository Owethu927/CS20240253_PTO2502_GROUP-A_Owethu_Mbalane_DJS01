function createPodastCardGrid(podcast, onClick) {
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
