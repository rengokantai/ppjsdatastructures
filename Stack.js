/**
 * Created by Hernan Y.Ke on 2015/10/17.
 */
function Stack(){
    this.items = [];
    this.length = this.items.length;
}

Stack.prototype.push = function(item){
    this.length =1;
    return this.items.push(item);
}