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