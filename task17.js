function findAndRemoveElement(array,number){
    var value=number;
    var is_Found;
    var position;
    for(var i=0;i<array.length;i++){
      if(array[i]===value){
      is_Found=true;
      position=i;
      }
      
      
      
      
    }
    
    if(is_Found===true){
       array.splice(position,1);
        return array;
    
    
    }
    else{
      return false;
    }
   // var new_array=[];
  }
  module.exports=findAndRemoveElement;
