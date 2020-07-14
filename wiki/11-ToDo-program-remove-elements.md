# To-Do : Write a JS Program to remove elements in Arrays


To remove a value from the end of the array, you can use the pop() method. Similarly, if you want to remove an element from the beginning of an array, you can do it by using the shift() method. In the given example, we will use both shift() and pop() to remove elements from an array.

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var num = [0, 1, 2, 3, 4, 5];

num.pop();
//Last element 5 is removed

console.log("array after pop is ", num);
//New array

num.shift();
//First element 0 is removed

console.log("Array after shift is ", num);
//New array
```