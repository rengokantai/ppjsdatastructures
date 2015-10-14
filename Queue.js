/**
 * Created by Hernan Y.Ke on 2015/10/12.
 */
function Queue(optElements){
    if(optElements instanceof Array){
        this.items = optElements;
    }else{
        this.items = [];
    }

    this.length = this.items.length;
}

Queue.prototype.enqueue = function(item){
    this.length = 1;
    return this.items.push(item);
}