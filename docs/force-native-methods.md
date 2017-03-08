# Forces the use of native methods instead of lodash/underscore

Many of the array functionality present in libraries like [lodash.com](lodash) or [underscorejs.org](underscore) are available on the Array prototype.

## Rule Details

The following patterns are considered warnings:

```js
import _ from 'lodash';

function getEvenNumbers(numbers) {
  return _.filter(numbers, num => num % 2 === 0);
}
```

``` js
import _ from 'lodash';

function increment(numbers) {
  return _.map(numbers, num => num + 1);
}
```

The following patterns are not considered warnings:

```js
function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
```

``` js
function increment(numbers) {
  return numbers.map(num => num + 1);
}
```
