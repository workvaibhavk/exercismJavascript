//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  const lastDigit = num % 10;
    const lastTwoDigit = num % 100;
  return `${name}, you are the ${num}${lastDigit == 1 && lastTwoDigit != 11 ?  "st" : lastDigit == 2 && lastTwoDigit != 12  ? "nd" : lastDigit == 3 && lastTwoDigit != 13 ?  "rd" : "th"} customer we serve today. Thank you!`;
};