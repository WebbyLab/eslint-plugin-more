const rule = require('../../../lib/rules/no-numeric-endings-for-variables');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 6, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

const message = 'Do not use variables with numeric endings';
const errors = [ { message } ];

/* eslint-disable max-len */
ruleTester.run('no-numeric-endings-for-variables', rule, {
    valid: [
        "const ironMan = 'Tony Stark';",
        'let foo = [];',
        'var whatever = 5;'
    ],
    invalid: [
        {
            code: "const user1 = 'Tony Stark';",
            errors
        },
        {
            code: 'let foo1 = [];',
            errors
        },
        {
            code: 'var whatever42 = 5;',
            errors
        }
    ]
});
