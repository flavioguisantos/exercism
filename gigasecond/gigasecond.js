//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const giga = 1000000000000;

export const gigasecond = (d) => {
  const data = Date.parse(d);
  return new Date(data + giga);
};
