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
