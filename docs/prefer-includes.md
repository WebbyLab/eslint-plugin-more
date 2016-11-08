# Forces the use of Array.prototype.includes intead of indexOf() if it is equal to -1

## Rule Details

The following pattern is considered a warning:

```js
let arr = [1, 2, 3, 4];

arr.indexOf(2); // 1
arr.indexOf(5); // -1
```

The following pattern is not considered a warning:

```js
let arr = [1, 2, 3, 4];

arr.includes(2); // true
arr.includes(5); // false
```
