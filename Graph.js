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