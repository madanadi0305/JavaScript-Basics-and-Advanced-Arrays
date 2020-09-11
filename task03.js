function insertHyphen(number){
var arr1=[];
var arr2=[];
var arr3=[];
var n=number;
var remainder;
for(var i=n;i!=0;){
remainder=i%10;
arr1.push(remainder);
i=parseInt(i/10);
}
 arr2=arr1.reverse();
 for(var j=0;j<arr2.length;j++){
     arr3.push(arr2[j]);
     if((arr2[j]%2===0) && (arr2[j+1]%2===0)){
         arr3.push('-');
     }
     
 }
 //arr2.splice(2,0,'-');
 var arr4=arr3.toString().split(",").join(" ");
return arr4;
}
module.exports=insertHyphen;
