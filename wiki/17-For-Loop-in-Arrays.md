# For Loop In Array
To print all the elements of the fruits array, you can write console.log() four times. But it's better to use a for loop. Since fruits.length is 4, the loop will run while i is between 0 and 3.



```js
var fruits = ["apple","banana","orange","grape"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
```


Output

```js
apple
banana
orange
grape
```

```js
var fruits = ["apple","banana","orange","grape"];
for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
```

Output

```js
apple
banana
orange
grape
```