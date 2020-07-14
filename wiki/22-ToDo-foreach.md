# To-Do : Write a JS Program to Use foreach function in Array


There are some methods which operate on every item of an array. These methods are called array iterations. ForEach works as a traditional for loop.

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var arry = prompt("Enter an array");

function check(a) {
  var sum = 0;
  a.forEach(function(element) {
    sum = sum + element * element;
  });
  return sum;
}
var output = check(arry);
console.log("Result is", output);
```