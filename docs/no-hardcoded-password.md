# Prohibits using hardcoded passwords.

Passwords should be passed via configuraion mechanism to provide multi-environment support.

## Rule Details

The following pattern is considered a warning:

```js
const password = 'DEFAULT_PASSWORD';

const variable = {
    password                : 'DEFAULT_PASSWORD',
    'password'              : 'DEFAULT_PASSWORD',
    [`${variable}password`] : 'DEFAULT_PASSWORD'         
};
```

The following pattern is not considered a warning:

```js
const password = config.password;
```