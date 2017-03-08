# Prohibits an empty line at the beggining of a class body

For clarity, there should be a new line as the immediate line after any class definition.

## Rule Details

The following pattern is considered a warning:

```js
export class SomeClass {
	constructor() {
		super()
	}
}
```

The following patterns are not considered warnings:

```js
export class SomeClass {
	/**
	 * This is the constructor for `SomeClass`
	 */
	constructor() {
		super()
	}
}
```

``` js
export class SomeClass {

	constructor() {
		super()
	}
}
```
