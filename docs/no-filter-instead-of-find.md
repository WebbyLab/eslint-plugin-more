# Prohibits using Array.prototype.filter to find one element in array

## Rule Details

The following pattern is considered a warning:

```js
const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

const elements = data.filter( el => el.count === 2)[0];

```

The following patterns are not considered warnings:

```js
const data = [{ count: 10 }, { count: 20 }, { count: 30 }];

const elements = data.filter( el => el.count > 20);

```

## When Not To Use It

1. Non-ES6 environments
2. No polyfill for ES6 Array methods present
