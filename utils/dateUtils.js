export const dataUtils = {
  formatDate: function (dateString) {
    const date = new Date(dateString);

    const option = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, option);
  },
};
