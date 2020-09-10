# Removing Array Elements

There are various methods that can be used to remove elements in an array.
 Like: Shift method() is used to remove elements from the beginning of an array,
  it shifts all elements down to one index lower than the current index. 
  the pop() method is used to reduce the length of an array by one and also return the value of the deleted item.

Removing element :

```js
var digits = [1, 2, 3, 4, 5];
digits.pop();
```

Example:

```js
var digits = [1, 2, 3, 4, 5];
var x = digits.pop();
console.log(x);
```

Output:

```js
5;
```

## Remove Elements From Array

To remove a value from the end of the array, you can use the pop() method. Similarly, if you want to remove an element from the beginning of an array, you can do it by using the shift() method. In the given example, we will use both shift() and pop() to remove elements from an array.

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

## Remove Elements Using Delete

To remove a value from any position in the array, you can use the delete method. For eg. If you want to remove the third element in the array you can write delete `array[2]` where 2 is the index number of the position. But, using delete to remove elements results in holes in an array with the value undefined as shown in the example below:

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
