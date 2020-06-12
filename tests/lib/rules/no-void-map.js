const rule = require('../../../lib/rules/no-void-map');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 6, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

const message = 'Here you have to assign this expression to variable or add other function to map';
const errors = [ { message } ];

/* eslint-disable max-len */
ruleTester.run('no-void-map', rule, {
    valid: [
        'const userIds = users.map(user => user.id)'
    ],
    invalid: [
        {
            code: 'users.map(user => user.status == "ACTIVE")',
            errors
        }
    ]
});
