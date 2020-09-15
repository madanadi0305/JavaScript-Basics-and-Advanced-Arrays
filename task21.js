function MaxAndMin(array){
    var temp,min;
    var sorted_array=[];
    var max_min_array=[];
    for(var i=0;i<array.length;i++){
        min=i;
        for(var j=i+1;j<array.length;j++){
            if(array[min]>array[j]){
            min=j;    
                
            }
            
            
        }
        
        if(min!=i){
            temp=array[min];
            array[min]=array[i];
            array[i]=temp;
        }
    }
    
sorted_array=array;
var small=0;
//var is_Minimum=true;
var large=sorted_array.length-1;
for(var i=0;i<sorted_array.length;i++ ){
    if(i%2==0){
       // max_min_array[i]=sorted_array[small++];
       max_min_array[i]=sorted_array[small];
      small=small+1;;
        
    }
    else{
        max_min_array[i]=sorted_array[large];
        large=large-1;
        //max_min_array.push(sorted_array[large--]);
        
    }
    //is_Minimum=false;
    
}
    
return max_min_array;    
}
module.exports=MaxAndMin;

