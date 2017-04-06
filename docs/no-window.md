# Prohibits the usage of `window` global

Addng variables to the global scope can cause unintended consequences.

## Rule Details

The following pattern is considered a warning:

```js
function setDetail(detail) {
	window.detail = detail;
}

function getDetail() {
	return window.detail;
}
```

The following pattern is not considered a warning:

```js
let __detail;

function setDetail(detail) {
	__detail = detail;
}

function getDetail() {
	return __detail;
}
```

## Rule Options

This rule can take one argument to exclude some properties calls.

```
...
"more/no-window": [<enabled>, { exclude: <exclude> }]
...
```

* `enabled`: for enabling the rule. 0=off, 1=warn, 2=error.
* `exclude`: optional array of methods.

The default configuration is:

```js
{
  exclude: [
    'postMessage',
    'open',
    'addEventListener',
    'removeEventListener'
  ]
}
```
