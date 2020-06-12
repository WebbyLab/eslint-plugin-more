const rule = require('../../../lib/rules/no-then');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 2017, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

const message = 'Do not use .then, instead use async / await';
const errors = [ { message } ];

/* eslint-disable max-len */
ruleTester.run('no-then', rule, {
    valid: [
        'async function foo() { const response = await getSomeData(); console.log(response); }'
    ],
    invalid: [
        {
            code: 'function foo() { getSomeData().then(response => { console.log(response); }) }',
            errors
        }
    ]
});
