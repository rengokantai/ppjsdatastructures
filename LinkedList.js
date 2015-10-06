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


LinkedList.prototype.delete = function(node){
    if(this.length === 1){
        return false;
    }
    if (node instanceof Node){
        for(let _node = this.head; _node!==null;_node = _node.next ){
            if(_node.next === node){
                _node.next =node.next;
                this.length -=1;
                return true;
            }
        }
    }else{
        for(let _node = this.head; _node!==null;_node = _node.next ){
            if(_node.next === this.tail){
                _node.next =null;
                this.tail = _node;
                this.length -=1;
                return true;
            }
        }
    }
    return false;
}