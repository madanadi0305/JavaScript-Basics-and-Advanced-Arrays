function duplicateArrayElements(array){
   var is_Duplicate,k;
   var duplicate_array=[];
    for(var i=0;i<array.length;i++){
    k=array[i];
    is_Duplicate=false;
    for(var j=i+1;j<array.length;j++){
        if(k===array[j]){
            is_Duplicate=true;
            break;
        }
    }
    if(is_Duplicate===true){
        duplicate_array.push(k);
    }
    }
    return duplicate_array;
}
module.exports=duplicateArrayElements;
