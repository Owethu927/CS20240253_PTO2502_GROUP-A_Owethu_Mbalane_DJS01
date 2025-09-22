import { genres } from "../data";

/**
 * retrive genre details from genre ids
 * @principle  SRP- Responsible formapping genre IDs into names
 */
export const GenreService = {
  /**
   * @param {number[]} genreIds - array of genres ID
   * @return {string[]}
   */

  getNames(genreIds) {
    return genreIds.map(
      (id) => genres.find((g) => g.id === id)?.title || "Unknown"
    );
  },
};
