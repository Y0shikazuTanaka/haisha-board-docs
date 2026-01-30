/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "";
