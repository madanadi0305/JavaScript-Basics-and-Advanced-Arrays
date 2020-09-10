# Adding Array Elements

There are various methods that can be used to add elements in an array. Like: push() method adds new elements at the end of the array.2. unshift() method adds new elements at the beginning of an array, shifting the existing array elements to a higher index.

Example :

```js
var fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);
```

Output :

```
["apple","banana","orange","grape"]
```

## Adding Elements Using Unshift Method

If you want to add elements at the start of the array, you can do that by using the unshift method. You can add as many elements as you want using the unshift method as given in the following example.

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