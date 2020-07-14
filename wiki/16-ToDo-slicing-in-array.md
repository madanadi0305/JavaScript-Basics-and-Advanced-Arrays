# To-Do : Write a JS Program to slice elements in Arrays


Slice is a function that is used to create a new array from a given array. Slice takes 2 arguments like slice(1,3). It selects array elements starting from 1st argument(1) up to (but not including) the second argument (3). If the 2nd argument is not present, the slice will start from the 1st argument and select the rest of the array. It only creates a new array and doesn’t remove any elements.

Hint:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
//New array sliced from Orange to Mango

var num = [1, 2, 3, 4, 5, 6];
var num1 = num.slice(1, 4);
//New array sliced from 2 to 4

console.log("Sliced fruits array ", citrus);

console.log("Sliced num array ", num1);
```