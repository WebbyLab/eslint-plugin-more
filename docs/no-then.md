# Forces the use of async / await intead of then

`async` / `await` can be used in conjunction with promises to make asynchronous code act in a synchronous manner.

## Rule Details

The following pattern is considered a warning:

```js
function getSomeData() {
  return fetch('http://some.url/')
}

getSomeData().then(response => {
  console.log(response);
});
```

The following pattern is not considered a warning:

```js
async function getSomeData() {
  return fetch('http://some.url/')
}

const responst = await getSomeData()
console.log(response);
```
