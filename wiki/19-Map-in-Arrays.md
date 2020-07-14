# Using Map() In Arrays
The array.map() method is used to call a function on each element of a given array and return the result in a new array. The function can use three parameters: element, index, and array. It does not change the original array, it instead returns a new array value. Unlike forEach(), the array.map() method must be assigned to a new variable.


```js
var array = [2,4,6];
var array2 = array.map(half);
funtion half(element){
    return element/2;
}
console.log("New array is",array2);
```

Output

```js
New array is [1,2,3];
```


## Array.Map()
In the below example, We have used array.map to multiplies each element of array numbers1 by 3 using the array.map and return the result in a new array numbers2

- Create variable numbers1 and assign value

- Use the map method to create a new array and assign it to a new variable

- Write a function to pass on each element of the array and multiply it by 3

- Print the new and original array

```js
var numbers1 = [45 , 4 , 9 , 16 , 25];
var numbers2 = numbers1.map(myFunction);

//Function can take 3 arguments value, index and array

function myFunction(element) {
    return element * 3;
}

console.log("New array is ", numbers2);
console.log("Original array is ", numbers1);
//Original array not changed
```

Output

```js
New array is Array
{
0: 135
1: 12
2: 27
3: 48
4: 75
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