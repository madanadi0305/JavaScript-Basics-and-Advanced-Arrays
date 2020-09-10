# Using ForEach() In Arrays
There are some methods which operate on every item of an array. These methods are called array iterations. ForEach works as a traditional for loop. The forEach() method executes given function once for each array element. In the below example, we have used foreach to print each array element using console.log()


```js
var array1=['a','b','c'];
array1.forEach(funtion(element){
    console.log("Element is",element);
});
```
Output

```
Element is a
Element is b
Element is c
```

## Array.Foreach
In the below example we have used forEach to calculate the square of every element of an array.

- Declare a function with name and parameters

- Declare input variables and assign values

- Use the forEach method and write a function to pass on each array element

- Return the result and call the function with arguments

- Assign result in output variable and print the output in the given format

```js
var arry = [0, 1, 2, 3 ];

function check(a){
    var sum = 0;
    a.forEach(function(element){
        sum=sum+(element*element);
    });
    return sum;
}
var output = check(arry);
console.log("Result is",output);
```


Output
```js
Result is 14.00
```