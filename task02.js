function lastNElements(arr,number){
var n=number;
var len_arr=arr.length;
var resultant_array=arr.slice(n,len_arr);
return resultant_array;
}
module.exports=lastNElements;
