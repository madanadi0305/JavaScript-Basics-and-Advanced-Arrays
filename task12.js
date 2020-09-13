function createNewArray(array1,array2){
var n1=array1.length;
var n2=array2.length;
var sum;
//var k1=0;
//var k2=0;
var index;
var new_array=[];
if(n1<n2){
    for(var i=0;i<n1;i++){
        sum=array1[i]+array2[i];
     new_array.push(sum);

    }
    index=n1;
   while(index<n2){
     new_array.push(array2[index]);
     index=index+1;
   }

}
     if(n2<n1){
         for(var i=0;i<n2;i++){
             sum=array1[i]+array2[i];
             new_array.push(sum);
         }
         index=n2;
         while(index<n1){
             new_array.push(array1[index]);
             index=index+1;
         }
     }
return new_array;
}
module.exports=createNewArray;
