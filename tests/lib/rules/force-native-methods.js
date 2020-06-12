const rule = require('../../../lib/rules/force-native-methods');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 6, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

const message = 'Do not use lodash methods, use native instead';
const errors = [ { message } ];

/* eslint-disable max-len */
ruleTester.run('force-native-methods', rule, {
    valid: [
        'numbers.filter(num => num % 2 === 0)',
        'numbers.map(num => num + 1)'
    ],
    invalid: [
        {
            code: '_.filter(numbers, num => num % 2 === 0)',
            errors
        },
        {
            code: '_.map(numbers, num => num + 1)',
            errors
        }
    ]
});
