function lastNElements(arr,number){
var n=number;
var len_arr=arr.length;
var n1=len_arr-n;
var resultant_array=arr.slice(n1,len_arr);
return resultant_array;
}
module.exports=lastNElements;
