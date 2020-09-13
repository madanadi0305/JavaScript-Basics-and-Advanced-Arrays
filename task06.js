function sortElementsInDescendingOrder(array) {
  var temp,max;
  for(var i=0;i<array.length;i++){
      max=i;
      for(var j=i+1;j<array.length;j++){
          
          if(array[j]>array[max]){
              max=j;
          }
      }
      
      if(max!=i){
          temp=array[max];
          array[max]=array[i];
          array[i]=temp;
      }
  }
  
  
  return array;
}
module.exports=sortElementsInDescendingOrder;
