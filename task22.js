function sortByAbsoluteDifference(array,value){
   var min,temp,k1,k2;
for(var i=0;i<array.length;i++){
k1=Math.abs(array[i]-value);
min=i;
for(var j=i+1;j<array.length;j++){
k2=Math.abs(array[j]-value);
if(k2<k1){
    min=j;
}
}
if(min!=i){
  temp=array[min];
  array[min]=array[i];
  array[i]=temp;

}
}

/*for(var i=0;i<array.length;i++){
    k1=Math.abs(array[i]-value);
    for(var j=i+1;j<array.length;j++){
        k2=Math.abs(array[j]-value);
        
        if(k1==k2){
            if(array[i]>array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
}*/
return array;

}
module.exports=sortByAbsoluteDifference;
