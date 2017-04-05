# Prevents wrong alignment of jsx properties

## Rule Details

The following pattern is considered a warning:

```js
<Component
	property= {value}
	property= 'value'
/>
```

```js
<Component
	property =   {value}
	property = 'value'
/>
```

```js
<Component
	property = {value}
    property  = 'value'
/>
```

```js
<Component
	property = {value}
    longProperty = 'value'
/>
```

The following patterns are not considered warnings:

```js
<Component
	property = {value}
    property = 'value'
/>
```

```js
<Component
	property     = {value}
    longProperty = 'value'
/>
```
