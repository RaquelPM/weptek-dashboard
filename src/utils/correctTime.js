export const getCorrectDate = date => {
  const data = `${new Date(date)}`;
  const newData = data.slice(3, 16);
  const newTime = data.slice(16, 21);
  return { newData, newTime };
};

export const getCorrectTime = time => {
  let adjust = time.slice(0, 2) - 3;
  if (time.slice(0, 2) === '00') adjust = -3;

  if (adjust < 0) adjust = 24 + adjust;
  if (adjust < 10) adjust = `0${adjust}`;

  const hour = `${adjust}${time.slice(2, 8)}`;

  return hour.slice(0, 5);
};

export const setCorrectTime = time => {
  let adjust = +time.slice(0, 2) + 3;
  if (adjust > 23) adjust -= 24;
  if (adjust < 10) adjust = `0${adjust}`;

  const hour = `${adjust}${time.slice(2, 8)}`;

  return hour;
};
