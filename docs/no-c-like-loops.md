# Prohibits the usage of c-like loop when you iterate over array and have i++ or i +=1

Error only on case when you iterate over array and have i++ or i +=1

## Rule Details

Error only on case when you iterate over array and have i++ or i +=1;

// Example of incrorrect code
```js
for (var i = 0; i < list.length; i++) {
}

for (var i = 0; i < list.length; i += 1) {
}
```

// Example of correct code
```js
list.forEach(function(item) {

});
```

```js
for (const item of list) {
}
```
