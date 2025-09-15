import { genres } from "../data";

export const GenreService = {
  // This function takes an array of IDs and returns matching genre names
  getGenreNames: function (genreIds) {
    return genreIds.map((id) => {
      // Try to find the genre with this ID
      const found = genres.find((genre) => genre.id === id);

      // Return the name if found, or "Unknown" if not
      return found ? found.name : "Unknown";
    });
  },
};
