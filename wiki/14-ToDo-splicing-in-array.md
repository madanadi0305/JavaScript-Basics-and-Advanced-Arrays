# To-Do : Write a JS Program to splice elements in Arrays


The splice method can also be used to add or remove items from an array. Splice is a function in which the first parameter defines the position(index number) where new elements will be added. 2nd parameter defines how many elements will be removed. Rest of the parameters defines the new elements to be added as shown in the example below:

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline


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
``