# Creating an Array

The easiest way to create an array is by putting the values inside `[ ]` and separating them with commas. This is called creating an array using literal. We advise you to use this method for creating arrays in future programs.

Creating Array with literal

```js
var digits = [1, 2, 3, 4, 5];
var days = ["Mon", "Tue", "Wed"];
```

## Creating And Initializing Arrays

If you want to create an array in Javascript, you can assign empty brackets `[ ]` to a variable and add elements using comma(,). You can also create an array using the `new` keyword. In the example given below, we created arrays daysOfWeek and fruits then put some elements in them. To know the number of elements in an array, we use length() property

```js
var daysOfWeek = ["Monday", "Tuesday", "Wednesday"];
//array created with 3 elements

var len1 = daysOfWeek.length;

console.log("Elements in daysOfWeek ", len1);
//Prints 3
```