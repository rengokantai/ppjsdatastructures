/**
 * Created by Hernan Y.Ke on 2015/10/22.
 */
function Node(data,left,right){
    this.data = data;
    this.left = left || null;
    this.right = right || null;
};


function BTree(){
    this.root = null;
    this.length = 0;
}

BTree.prototype.add = function(data){
    var node = new Node(data);
    this.length = 1;

    if(this.root == null){
        return this.root = node;
    }

    var currentNode = this.node;
    var parentNode = null;

    while(currentNode){
        parentNode = currentNode;
        if(data.id < currentNode.data.id){
            currentNode = currentNode.left;
            if(currentNode ===null){
                return parentNode.left = node;
            }
        }else{
            currentNode = currentNode.right;
            if(currentNode ===null){
                return parentNode.right = node;
            }
        }
    }
}