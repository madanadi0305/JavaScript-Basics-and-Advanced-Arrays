function moveToFixedPosition(array,start,end){
if(start<0)
{start+=array.length;

}
if(end<0){
    end+=array.length;
}
if(end>array.length){
var end_new=end-array.length;
while((end_new--)+1){
array.push(undefined);
}
}
array.splice(end,0,array.splice(start,1)[0]);
return array;
}
module.exports=moveToFixedPosition;
