export const TimeConverter = (currTime) => {
  let dateYear = new Date(currTime).getFullYear();
  let dateMonth = new Date(currTime).getMonth();
  let dateDay = new Date(currTime).getDate();

  if (dateMonth === 0) {
    dateMonth = 1;
  }

  return `${dateDay}-${dateMonth}-${dateYear}`;
};

export default TimeConverter;
