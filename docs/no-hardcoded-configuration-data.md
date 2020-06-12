# Prohibits using hardcoded configuration data.

Configuration data should be passed via configuraion mechanism to provide multi-environment support.

## Rule Details

The following pattern is considered a warning:

```js
const ip     = '192.168.1.1';
const uuid   = 'b0d4ce5d-2757-4699-948c-cfa72ba94f86';
const token  = 'AEYGF7K0DM1X';
const domain = 'domain.com'

const object = {
    ip     : '192.168.1.1',
    uuid   : 'b0d4ce5d-2757-4699-948c-cfa72ba94f86',
    token  : 'AEYGF7K0DM1X',
    domain : 'domain.com'       
};
```

The following pattern is not considered a warning:

```js
const ip     = config.ip;
const uuid   = config.uuid;
const token  = config.token;
const domain = config.domain

const object = {
    ip:     config.ip,
    uuid:   config.uuid,
    token:  config.token,
    domain: config.domain    
};
```

## Rule Options

This rule can take arguments to forbid and exclude some configuration data.

```
"more/no-hardcoded-configuration-data": [
    <enabled>, 
    { 
        forbidContaining  : <forbidContaining>, 
        excludeContaining : <excludeContaining> 
    }
]
```

* `enabled`           : for enabling the rule. 0=off, 1=warn, 2=error.
* `forbidContaining`  : optional array of stings for forbid.
* `excludeContaining` : optional array of stings for exlude.

The default configuration is:

```
{
    forbidContaining  : ["ipAddress", "UUID", "alphanumericToken", "domainName"], 
    excludeContaining : ['facebook', 'google', 'yandex']
}
```