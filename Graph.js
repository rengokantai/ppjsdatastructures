/**
 * Created by Hernan Y.Ke on 2015/10/27.
 */
function Graph(){
    this.nodes = [];
    this.length = 0;
}

function Node(data){
    this.data = data;
    this.neighbours = [];
}


Graph.prototype.addNode = function(node){
    this.nodes.push(node);
    return ++this.length;
}


Graph.prototype.addEdge = function(nodeA, nodeB){
    var nA = this.nodes.filter(function(node){
        return node.data.id ===nodeA;
    });

    var nB = this.nodes.filter(function(node){
        return node.data.id ===nodeB;
    });

    if(nA.length && nB.length){
        nA[0].neighbours.push(nB[0]);
        nB[0].neighbours.push(nA[0]);
    }
}

//Create nodes
var g = new Graph();

g.addNode(new Node({
    id:1,
    articleId:100,
    readBy:[{userId:10}]
}))


g.addNode(new Node({
    id:2,
    articleId:100,
    readBy:[{userId:20}]
}))

g.addNode(new Node({
    id:3,
    articleId:100,
    readBy:[{userId:10, userId:20}]
}))


g.addEdge(1,3);