function findAndRemove(array,number){
    //var pos;
    //var is_Found;
    array.forEach(function(element,index){
                
      if(number===element){
                //  is_Found=true;
        array.splice(index,1);
    }
      
    });  
    
    
   return array;
  }
  module.exports=findAndRemove;
