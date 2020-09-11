function sumOfSquaresOfElements(array){
var sumOfSquares=0;
var arr1=array;
arr1.forEach(function(elements){
 sumOfSquares=sumOfSquares+Math.pow(elements,2);

});
return sumOfSquares;

}

module.exports=sumOfSquaresOfElements;
