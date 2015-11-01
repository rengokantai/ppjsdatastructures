/**
 * Created by Hernan Y.Ke on 2015/11/1.
 */
function binarySearch(data, value){
    while(true){
        var mid = parseInt(data.length/2,10);

        if(value === data[mid]){
            return data[mid];
        }else if(value>data[mid]){
            data = data.slice(mid);
        }else{
            data = data.slice(0,mid);
        }
        if(mid===0){
            if(value ===data[0]){
                return data[0];
            }
            return null;
        }
    }
}

var list = [];
for(var i =0;i<10000;i++){
    list.push(i);
}

var val = Math.random *1000 | 0;
match = binarySearch(list,val);