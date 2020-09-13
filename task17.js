function findAndRemove(array,number){
    var pos;
    var is_Found;
    array.forEach(function(element,index){
                is_Found=false;
                  if(number===element){
                  is_Found=true;
                  pos=index;
      
                 //array.splice(pos,1);
    }
      if(is_Found===true){
        array.splice(pos,1);
       // return array;
      }
        
                  });  
    
    
   return array;
  }
  module.exports=findAndRemove;
