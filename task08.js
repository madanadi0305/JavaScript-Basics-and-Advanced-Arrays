function sumAndProductOfArray(array){
  var sum=0;
  var product=1;
  var arr1=array;
  var sum_and_product_array=[];
  arr1.forEach(function(element){
      sum=sum+element;
      product=product*element;
  });
   sum_and_product_array.push(sum);
   sum_and_product_array.push(product);
    return sum_and_product_array;
}

module.exports=sumAndProductOfArray;
