function sortElementsInAscending(array){
   // var arr1=array;
    var temp,min;
    
    for(var i=0;i<array.length;i++){
        min=i;
        for(var j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min=j;
            }
            
            
        }
        if(min!=i){
            temp=array[min];
            array[min]=array[i];
            array[i]=temp;
            
        }
        
    }
    return array;
}
module.exports=sortElementsInAscending;
