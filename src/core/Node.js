/**
 * A node in grid. 
 * This class holds some basic information about a node and custom 
 * attributes may be added, depending on the algorithms' needs.
 * @constructor
 * @param {number} x - The x coordinate of the node on the grid.
 * @param {number} y - The y coordinate of the node on the grid.
 * @param {boolean} [walkable] - Whether this node is walkable.
 * @param {number} height - The height (or z coordinate) of the node on the grid.
 */
function Node(x, y, walkable, height) {
    /**
     * The x coordinate of the node on the grid.
     * @type number
     */
    this.x = x;
    /**
     * The y coordinate of the node on the grid.
     * @type number
     */
    this.y = y;
    /**
     * Whether this node can be walked through.
     * @type boolean
     */
    this.walkable = (walkable === undefined ? true : walkable);
    /**
     * Height of this node.
     * @type number
     */
    this.height = height || 0;
    
};

Node.prototype.clone = function() {
    return new Node(this.x,
		    this.y,
		    this.walkable,
		    this.height);
};



module.exports = Node;
