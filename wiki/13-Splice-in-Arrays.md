# Splice In Arrays

The splice() method can either add or remove an item, or add and remove items at the same time from any position in an array. It takes three parameters — the index number to start at, the number of items to remove, and items to add (optional). For eg. Splice (0, 0, "new") would add the string "new" to the beginning of an array, and delete nothing.

## Splicing An Array

The splice method can also be used to add or remove items from an array. Splice is a function in which the first parameter defines the position(index number) where new elements will be added. 2nd parameter defines how many elements will be removed. Rest of the parameters defines the new elements to be added as shown in the example below:

```js
var fruits = ["Banana ", "Orange ", "Apple ", "Mango "];
fruits.splice(2, 0, "Lemon ", "Kiwi ");
/*Lemon, kiwi added at index number 2 
and no elements were removed*/

var num = [1, 2, 3, 4, 5, 6];
var removed = num.splice(2, 2, 7, 8);
//7,8 added at index 2 and 3,4 removed
//Splice returns array of removed items

console.log("New array is ", fruits);

console.log("New array is ", num);

console.log("Removed array is ", removed);
//prints removed items
```