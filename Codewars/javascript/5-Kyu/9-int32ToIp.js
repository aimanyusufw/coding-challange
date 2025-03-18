// Codewars 9
// Title :  int32 to IPv4
// Instructions :   Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.
// Challange Url :  https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript
// Level : 5kyu

// Method : 1
export const int32ToIp = (int) => {
  return [
    (int >>> 24) & 255,
    (int >>> 16) & 255,
    (int >>> 8) & 255,
    int & 255,
  ].join(".");
};

// Method 2

// Other Users Method
