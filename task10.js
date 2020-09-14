
function removeDuplicateElements(array){

var k,position;
for(var i=0;i<array.length;i++){
k=array[i];
  for(var j=i+1;j<array.length;j++){
  if(array[j]===k){
    position=array.indexOf(array[j]);
    next=position+1;
    while(next<array.length)
    {if(array[position]===array[next]){
      array.splice(next,1);
      
    }
     next=next+1;
    }
    
  }
  
  
  }
}
  return array;
}


module.exports=removeDuplicateElements;
