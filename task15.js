function sortInDescendingOrder(array,n){
var max,k,temp;
var new_array=[];
for(var i=0;i<array.length;i++){
max=i;
 for(var j=i+1;j<array.length;j++) {
   if(array[j]>array[max])  {
     max=j;  
   }
 }
if(max!=i){
   temp=array[max];
   array[max]=array[i];
   array[i]=temp;
}
}
new_array=array;
for(var i=0;i<new_array.length;i++){
  //var k=new_array[i];
  if(i==n) {
 k=new_array[i];
 break;}
  }
  return k; 
}

module.exports=sortInDescendingOrder;
