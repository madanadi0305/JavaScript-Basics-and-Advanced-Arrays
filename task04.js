function repeatedElements(array){
var array_repeated=[];
var count,k,is_Max;var maxCount=2;
for(var j=0;j<array.length;j++){
 count=0;
  is_Max=false;
 k=array[j];
 for(var i=0;i<array.length;i++){
     if(k===array[i]){
         count=count+1;
      
      
     }
    //maxCount=count;
   if((count>maxCount)){
    is_Max=true;       
    break; 
         }   
   
 }
  if(is_Max===true){
  break;
    //  array_repeated.push(k);
  //array_repeated.push(count);
 }
  
  
}
 
  array_repeated.push(k);
  array_repeated.push(count);
 
  
return array_repeated;
}

module.exports=repeatedElements;
