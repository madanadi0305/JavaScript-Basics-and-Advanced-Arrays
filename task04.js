function repeatedElements(array){
var array_repeated=[];
var count,k,is_Max;var maxCount=2;
for(var j=0;j<array.length;j++){
 
  
 k=array[j];
 for(var i=j;i<array.length;i++){
     if(k===array[i]){
         count=count+1;
      
      
     }
  
   if((count>maxCount)){
    //is_Max=true;     
     maxCount=count;
     //;
     
   array_repeated.push(k);
     array_repeated.push(count);  
         }   
   
 }
 count=0;  
 
  
}
 
 
  
 
  
return array_repeated;
}

module.exports=repeatedElements;
