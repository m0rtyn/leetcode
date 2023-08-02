/**
 * Definition for a binary tree node.
*/
class TreeNode {
    constructor(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
    }
    toString() {
      return JSON.stringify(this)
    }
}

/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
var invertTree = function(root) {
  if (root === null) return null;

  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root
};

invertTree(
  new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))
) // ?