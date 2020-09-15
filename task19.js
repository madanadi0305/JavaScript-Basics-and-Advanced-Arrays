function keyValuePair(array,target){
 var sum;
 var key_array=[];   
for(var i=0;i<array.length;i++){
  for(var j=i+1;j<array.length;j++)  {
   sum=array[i]+array[j];
   if(sum===target){
    key_array.push(i);
    key_array.push(j);
   }
  }
}
return key_array;
}
module.exports=keyValuePair;
