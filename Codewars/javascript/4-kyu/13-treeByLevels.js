// Codewars 13
// Title :  Sort binary tree by level
// Instructions :   Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.
// Challange Url :  https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
// Level : 4kyu

// Method : 1
export const treeByLevels = (rootNode) => {
  if (!rootNode) return [];

  const result = [];
  const queue = [rootNode];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return result;
};

// Method 2

// Other Users Method
function treeByLevels(rootNode) {
  const queue = [rootNode];
  const values = [];

  while (queue.length) {
    let node = queue.shift();

    if (node) {
      values.push(node.value);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return values;
}
