# To-Do : Write a JS Program to Use elements in Arrays


You can get the values in an array by using index numbers. Note that index numbers start with 0 (`[0]` is the first element in an array and `[1]` is the second). In the given array fruits, You can update an element in an array by assigning a new value to it. For example, you can update the value at index 0 by entering: `fruits[0]` = "litchi"

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var fruits = ["Grapes", "Apples", "Banana", "Oranges"];
//array created with 4 elements

var len = fruits.length;
console.log("No. of elements in fruits ", len);
//Prints length of array

console.log("Print", fruits[0]);
//Prints the first element of array

fruits[0] = "litchi";
//First element updated with new value

console.log("Print", fruits[0]);
//Prints new value of first element

console.log("Print", fruits[fruits.length - 1]);
//Prints the last element of array
```