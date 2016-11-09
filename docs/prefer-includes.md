# Forces the use of Array.prototype.includes intead of indexOf() if it is equal to -1

## Rule Details

The following pattern is considered a warning:

```js
var users = [1, 2, 3, 4];

users.indexOf(2) == -1; //false
```

The following pattern is not considered a warning:

```js
var users = [1, 2, 3, 4];

users.includes(2); // true

```
