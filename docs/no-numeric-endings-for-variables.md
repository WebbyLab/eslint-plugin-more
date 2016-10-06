# Prohibits the use of variables that end in numerics.

Variables that end in numbers make it harder to discern their purpose.

## Rule Details

The following pattern is considered a warning:

```js
const user1 = 'Tony Stark';
```

The following pattern is not considered a warning:

```js
const ironMan = 'Tony Stark
```
