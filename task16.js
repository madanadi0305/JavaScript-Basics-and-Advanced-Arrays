function findElement(array,value){
    var is_Found=false;
for(var i=0;i<array.length;i++){
    if(array[i]===value){
     is_Found=true;
     break;
    }
    
}
if(is_Found===true){
    return true;
}
else{
    return false;
}

}
module.exports=findElement;
