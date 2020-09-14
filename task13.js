function createArray(integer,number){
 var array=[];  
for(var i=0;i<number;i++){
array.push(integer);
integer=integer+1;
}
return array;
}
module.exports=createArray;
