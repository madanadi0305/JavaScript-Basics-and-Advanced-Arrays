# Joining Multiple Arrays
Suppose you have different arrays and you need to join them into a single array. You can do that by using concat method. The arrays will be joined in the order of the arguments passed to the concat method. In the below example, we have joined negative, zero and positive using concat method.


- Create variables with names and assign values

- Use concat() method to join the arrays. Notice the order in which arrays are joined together

- Print the new array using console.log()

```js
var negative = [-3,-2,-1];
 var zero = 0;
 var positive = [1,2,3];
 var numbers = negative.concat(zero, positive);
 
 console.log("New array is ", numbers);

//Prints array from -3 to 3
```

Output

```js
New array is Array
{
0: -3
1: -2
2: -1
3: 0
4: 1
5: 2
6: 3
}
```