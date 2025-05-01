// Codewars 15
// Title :  Convert a Hex String to RGB
// Instructions :   When working with color values it can sometimes be useful to extract the individual red, green, and blue
// Challange Url :  https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
// Level : 5kyu

// Method : 1
export const hexStringToRGB = (hexString) => {
  return {
    r: parseInt(hexString.slice(1, 3), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    b: parseInt(hexString.slice(5, 7), 16),
  };
};

// Method 2

// Other Users Method
const hexStringToRGB = (str) => {
  const [r, g, b] = str.match(/\w{2}/g).map((x) => parseInt(x, 16));
  return { r, g, b };
};
