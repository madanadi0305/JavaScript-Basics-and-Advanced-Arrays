function mostRepeatedElements(array){
    var most_repeated=[],newCount;
    var count,maxcount=1,is_Max,k,max;
    for(var i=0;i<array.length;i++){
        count=0;
        //is_Max=false;
        for(var j=i;j<array.length;j++)
        { k=array[j];
            if(k===array[i]){
            count=count+1;
            
            
        }
       // if(count>maxcount ){
         //   is_Max=true;
           //  most_repeated.push(k);
            // most_repeated.push(count);
            //break;
       // }
        if(count>maxcount){
            //is_Max=true;
             maxcount=count;
             //most_repeated.push(k);
             //most_repeated.push(count);
            // break;
        }
         //maxcount=maxcount+1;   
        }
        
      
        
    }
  max=maxcount;
  
  for(var i=0;i<array.length;i++){
    newCount=0;
    k=array[i];
    for(var j=i;j<array.length;j++){
      if(array[j]===k){
        newCount=newCount+1;
        
      }
      if(newCount===max){
     // most_repeated.push(k);  
    most_repeated.push(k);
        most_repeated.push(max);
        
        break;
      }
      
      
    }
    //most_repeated.push(k);  
    //break;
  }
   
  //return max;
   return most_repeated; 
    
}
module.exports=mostRepeatedElements;
