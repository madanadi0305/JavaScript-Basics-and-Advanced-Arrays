# To-Do : Write a JS Program to Use Array.map() function


In this demo, We have used array.map to multiplies each element of array numbers1 by 3 using an array.map and return the result in a new array numbers2

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

//Function can take 3 arguments value, index and array

function myFunction(element) {
  return element * 3;
}

console.log("New array is ", numbers2);
console.log("Original array is ", numbers1);
//Original array not changed
```