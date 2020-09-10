# To-Do : Write a JS Program to join multiple arrays


Suppose you have different arrays and you need to join them into a single array. You can do that by using concat method. The arrays will be joined in the order of the arguments passed to the concat method. In the below example, we have joined negative, zero and positive using concat method.

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var negative = [-3, -2, -1];
var zero = 0;
var positive = [1, 2, 3];
var numbers = negative.concat(zero, positive);

console.log("New array is ", numbers);

//Prints array from -3 to 3
```