const rule = require('../../../lib/rules/prefer-includes');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 6, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

const message = 'Do not use indexOf, instead use includes ';
const errors = [ { message } ];

/* eslint-disable max-len */
ruleTester.run('prefer-includes', rule, {
    valid: [
        '[1, 2, 3, 4].includes(2)'
    ],
    invalid: [
        {
            code: '[1, 2, 3, 4].indexOf(2) === -1',
            errors
        }
    ]
});
