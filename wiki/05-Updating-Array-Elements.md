# Updating Array Elements

You can update an element in an array by assigning a new value to it. For example, you can update the value at index 0 by entering: `fruits[0]` = "grape".

Example :

```js
var fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
fruits[0] = "grape";
console.log(fruits[0]);
```

Output :

```
apple
grape
```

## Using Elements In Array

You can get the values in an array by using index numbers. Note that index numbers start with 0 (`[0]` is the first element in an array and `[1]` is the second). In the given array fruits, You can update an element in an array by assigning a new value to it. For example, you can update the value at index 0 by entering: fruits`[0]` = "litchi"

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