// Codewars 9
// Title :  Simple fun #27: Reactangel Rotation
// Question :   A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane.
// Challange Url :  https://www.codewars.com/kata/5886e082a836a691340000c3/train/typescript
// Level : 4kyu

// Method : 1
export function rectangleRotation(a: number, b: number): number {
  const x = Math.floor(a / Math.sqrt(2));
  const y = Math.floor(b / Math.sqrt(2));
  const r = (x + 1) * (y + 1) + x * y;
  return r + (r % 2) - 1;
}

// Method : 2

// Other Users Method
// export function rectangleRotation(a: number, b: number): number {
//   const h = (a / Math.sqrt(2)) | 0,
//     v = (b / Math.sqrt(2)) | 0;
//   return h * v + -~h * -~v - (h % 2 ^ v % 2);
// }
