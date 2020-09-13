function sortInAscendingOrder(array){
var min,temp;
for(var i=0;i<array.length;i++){
    min=i;
    for(var j=i+1;j<array.length;j++){
      if(array[j]<array[min]){
          min=j;
      }

    }

    if(min!=i){
    temp=array[min];
    array[min]=array[j];
    array[j]=temp;
    }
    
}
return array;
}
module.exports=sortInAscendingOrder;
