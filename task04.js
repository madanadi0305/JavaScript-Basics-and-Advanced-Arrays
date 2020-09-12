function repeatedElements(array){
var k,count;
//var max_count=2;
var repeated_array=[];
 var is_MaxRepeated;
for(var i=0;i<array.length;i++){
    k=array[i];
    count=1;
    for(var j=i+1;j<array.length;j++){
        if(k===array[j]){
            count=count+1;
            
        }
        if(count>=2){
            is_MaxRepeated=true;
        }
    }
    if(is_MaxRepeated===true){
        repeated_array.push(k);
        repeated_array.push(count);
    }
}
    return repeated_array;
}
module.exports=repeatedElements;
