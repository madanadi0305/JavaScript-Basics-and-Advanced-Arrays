function sortByAbsoluteDifference(array,value){
   var min,temp,k1,k2;
   var original_array=array;
  // var sorted_array=[];   
  for(var i=1;i<array.length;i++){
      k1=Math.abs(array[i]-value);
        var j=i-1;
        if((Math.abs(array[j]-value)>k1)){
            temp=array[i];
        while((Math.abs(array[j]-value)>k1)&& j>=0){
           // temp=array[i];
           array[j+1]=array[j];
           j--;
           // sorted_array.push(temp);
        }
        array[j+1]=temp;
        }
      
  } 

return array;

}
module.exports=sortByAbsoluteDifference;
