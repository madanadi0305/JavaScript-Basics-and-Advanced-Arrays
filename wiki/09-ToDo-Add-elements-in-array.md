# To-Do : Write a JS Program to add elements in Array.


If you want to add elements at the start of the array, you can do that by using the unshift method.cm You can add as many elements as you want using the unshift method as given in the following example.

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var num = [0, 1, 2, 3, 4, 5];
//Array created with 6 elements

//Add elements at the start using unshift
num.unshift(-1);

console.log("first number is ", num[0]);
//Prints -1

num.unshift(-4, -3, -2);
//More elements added

console.log("New array is ", num);
//Prints new array from -4 to 5
```
