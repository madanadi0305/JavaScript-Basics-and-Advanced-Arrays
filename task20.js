function binarySearch(array,value,start,last){
var  mid=parseInt((last+start)/2);
var is_Found=false;;
    var elem;
     if(array[mid]===value){
         is_Found=true;
         return is_Found;
     }
    if(array[mid]>value){
        for(var i=start;i<mid;i++){
            elem=array[i];
            if(elem===value){
                is_Found=true;
                break;                
            }
                }
        return is_Found;
        }
    
    if(value>array[mid]){
        for(var j=mid+1;j<=last;j++){
            elem=array[j];
            if(elem===value){
                is_Found=true;
                break;
                
            }
            
        }
        return is_Found;
    }
    
    else{
        is_Found=false;
        return is_Found;
    }
      
}
module.exports=binarySearch;




