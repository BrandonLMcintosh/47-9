class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
	insert(val) {
		if (val < this.val) {
			if (!this.left) return (this.left = new Node(val));
			this.left.insert(val);
		}
		if (val > this.val) {
			if (!this.right) return (this.right = new Node(val));
			this.right.insert(val);
		}
	}

	find(val) {
		if (val === this.val) return this;
		if (val > this.val && this.right) return this.right.find(val);
		if (val < this.val && this.left) return this.left.find(val);
		return undefined;
	}

	inTraverse(arr) {
		if (this.left) arr = this.left.inTraverse(arr);
		arr.push(this.val);
		if (this.right) arr = this.right.inTraverse(arr);
		return arr;
	}

	preTraverse(arr) {
		arr.push(this.val);
		if (this.left) arr = this.left.preTraverse(arr);
		if (this.right) arr = this.right.preTraverse(arr);
		return arr;
	}

	postTraverse(arr) {
		if (this.left) arr = this.left.postTraverse(arr);
		if (this.right) arr = this.right.postTraverse(arr);
		arr.push(this.val);
		return arr;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}

		let node = this.root;
		while (node) {
			if (val > node.val) {
				if (!node.right) {
					node.right = new Node(val);
					return this;
				}
				node = node.right;
			}
			if (val < node.val) {
				if (!node.left) {
					node.left = new Node(val);
					return this;
				}
				node = node.left;
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}
		this.root.insert(val);
		return this;
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		if (!this.root) return undefined;
		let node = this.root;
		let found = false;
		while (node && !found) {
			if (!node) return null;
			if (val === node.val) {
				found == true;
				return node;
			}
			if (val > node.val) {
				node = node.right;
			} else if (val < node.val) {
				node = node.left;
			}
		}
		if (!found) return undefined;
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {
		if (!this.root) return undefined;
		return this.root.find(val);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder(node = this.root) {
		let nodeArray = [];
		nodeArray = node.preTraverse(nodeArray);
		console.log("pre-order " + nodeArray);
		return nodeArray;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder(node = this.root) {
		let nodeArray = [];
		nodeArray = node.inTraverse(nodeArray);
		console.log("in-order " + nodeArray);
		return nodeArray;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder(node = this.root) {
		let nodeArray = [];
		nodeArray = node.postTraverse(nodeArray);
		console.log("post-order " + nodeArray);
		return nodeArray;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs(queue = [this.root], vals = []) {
		if (queue.length) {
			const current = queue.shift();
			vals.push(current.val);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
			return this.bfs(queue, vals);
		}

		return vals;
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
