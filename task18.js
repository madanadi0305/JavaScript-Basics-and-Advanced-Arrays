function MergeArrays(array1,array2){
    var merged_array=[];
    var target_elem;
    array1.forEach(function(elements){
      merged_array.push(elements);
      
      
    });
    array2.forEach(function(elements){
      merged_array.push(elements);
      
    });
    
    for(var i=0;i<merged_array.length;i++){
      target_elem=merged_array[i];
      for(var j=i+1;j<merged_array.length;j++){
        if(merged_array[j]===target_elem){
          merged_array.splice(j,1);
        }
      }
      
    }
    
    return merged_array;
    
  }
  module.exports=MergeArrays;
