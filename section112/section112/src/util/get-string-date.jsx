export const getStringDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = (targetDate.getMonth() + 1).toString().padStart(2, "0");
  let date = targetDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${date}`;
};
