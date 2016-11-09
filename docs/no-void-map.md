# 

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
