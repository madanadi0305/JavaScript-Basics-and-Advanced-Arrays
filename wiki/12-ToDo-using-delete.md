# To-Do : Write a JS Program to remove elements in Arrays using DELETE


To remove a value from any position in the array, you can use the delete method. For eg. If you want to remove the third element in the array, you can write delete `array[2]` where 2 is the index number of the position. But, using delete to remove elements results in holes in the array with the value undefined as shown in the example below:

Steps:

- Open `practice01.js` file from left folder menu
- After opening `practice01.js`, Copy/Paste the below code in the editor.
- Commit your code to see output in pipeline

```js
var num = [0, 1, 2, 3, 4, 5, 6];

delete num[3];
//remove fourth element from array

console.log("New array is ", num);
//Prints new array

console.log("Fourth element is ", num[3]);
//Prints undefined

console.log("Length of new array is ", num.length);
//Length is again 7 after delete
```