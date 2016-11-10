# Forces to assign array.map to variable

You have not to leave array.map without variable or property (bad example). Here you can to assign it to variable if you need new array of elements from old array (first good example ) or continue to work with new array with other property (second good example). Look carefully at examples.

## Rule Details

The following pattern is considered a warning:

```js
users.map(user=> user.status = "ACTIVE");
```

The following pattern is not considered a warning:

```js
var users = [1, 2, 3, 4];

const usersIds = users.map(user => user.id);

```

```js
var users = [1, 2, 3, 4];

users.map(user => user.id).forEach( id => { console.log(id) } );

```
