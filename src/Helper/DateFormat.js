import { format } from "date-fns";

export const reformatDate = (date, dateFormat) => {
  const newDate = format(new Date(date), dateFormat);
  return newDate;
};
