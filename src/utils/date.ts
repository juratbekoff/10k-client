import dateFormat from "dateformat";

export const dateFormatter = (date: string) => {
  let paddedShortDate = dateFormat(date, "longDate");
  let shortTime = dateFormat(date, "shortTime");

  return `${paddedShortDate}, ${shortTime}`;
};
