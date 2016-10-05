# Prohibits the duplication of long chains like `this.props.user.name`

Long chains of object calls should be assigned to a variable or destructured if used multiple times.

## Rule Details

The following pattern is considered a warning:

```js
render() {
	return (<div className={this.props.className}>
		<p>{this.props.text}</p>
	<div>)
}
```

The following patterns are not considered warnings:

```js
render() {
	const { className, text } = this.props;

	return (<div className={className}>
		<p>{text}</p>
	<div>)
}
```

```js
render() {
	const props = this.props;

	return (<div className={props.className}>
		<p>{props.text}</p>
	<div>)
}
```
