/**
 * Created by Hernan Y.Ke on 2015/10/4.
 */
function Node(data){
    this.data = data;
    this.next = null;
}



function LinkedList(){
    this.next = null;
    this.tail = null;
    this.length = 0;
}


LinkedList.prototype.add = function(data){
    var node = new Node(data);
    if(this.head === null){
        this.head = node;
        this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
    this.length +=1;

    return node;
};