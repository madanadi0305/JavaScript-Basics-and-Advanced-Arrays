# Using Filter() In Arrays
Let’s say we have a given array. We could use filter() to return a new array containing only those items from the given array which pass the result of a given test. The function can use three parameters: element, index, and array. It does not change the original array, it instead returns a new array.



```js
var array1 = ['sea','men','sun','eye','son'];

var array2 = array1.filter(firstletter);
function firstletter(element){
    return element[0]==='s';
}
console.log("New array is",array2);

```

Output

```js
New array is ['sea','sun','son']
```


## Array.Filter
If we apply the filter method on an array, it creates a new array with elements that pass the result of a given test. It takes 3 arguments value, index and array. The filter method does not change the original array and returns the result in a new array. In the below example, we apply the filter on a given array and create a new array with elements having a value greater than 18.


- Create variable numbers and assign value

- Use the filter method to create a new array and assign it to the new variable

- Write a function to pass on each element of the array and filter the elements with value more than 18

- Print the new and original array

```js
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log("New array is ", over18);
console.log("Original array is ", numbers);

//Original array not changed
```

Output
```js
New array is Array
{
0: 45
1: 25
}
Original array is Array
{
0: 45
1: 4
2: 9
3: 16
4: 25
}
```