# Slice In Arrays

The slice() method copies a portion of an array to a new array. Suppose we want to copy the last two items in the array to a new array. We would start with the index number of the first element we want, which is 2 for koi. We would end with the index number one more than the index of the last element we want. Because the last element, eel, has the index number of 3, we would put 4.

Slice an Array

```js
var fish = ['piranha','seahorse','koi','eel'];
var fish1 = fish.slice(2,4);
console.log("New fish",fish1);
```

**Output**

```js
New fish['koi','eel']
```

## Using Slice In Arrays
Slice is a function that is used to create a new array from a given array. Slice takes 2 arguments like slice(1,3). It selects array elements starting from 1st argument(1) up to (but not including) the second argument (3). If the 2nd argument is not present, the slice will start from 1st argument and select the rest of the array. It only creates a new array and doesn’t remove any elements.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
//New array sliced from Orange to Mango

var num = [1,2,3,4,5,6];
var num1 = num.slice(1,4);
//New array sliced from 2 to 4

console.log("Sliced fruits array ", citrus);

console.log("Sliced num array ", num1);
```

## Slice Demo
In the below example, we have used the slide method in array to take out a part of the original array and print it as a result. The slice method can be used with one or two arguments. Notice the difference in results between the slice used with one argument and slice used with 2 arguments and compare it with the original array.

```js
var array=[1,2,3,4,5];
console.log("Result is",array.slice(2));
// shows [3, 4, 5], returned selected element(s).
 
console.log("Result is ",array.slice(-2));
// shows [4, 5], returned selected element(s).
console.log('Original array ',array);
// shows [1, 2, 3, 4, 5], original array remains intact.
 
var array2=[6,7,8,9,0];
console.log('Result is ',array2.slice(2,4));
// shows [8, 9]
 
console.log('Result is ',array2.slice(-2,4));
// shows [9]
 
console.log('Result is ',array2.slice(-3,-1));
// shows [8, 9]
 
console.log('Original array ',array2);
// shows [6, 7, 8, 9, 0]
```