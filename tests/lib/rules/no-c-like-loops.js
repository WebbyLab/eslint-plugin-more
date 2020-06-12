const rule = require('../../../lib/rules/no-c-like-loops');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 6, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

// eslint-disable-next-line max-len
const message = 'Do not use c-like loop with i++ or i +=1, instead use forEach, Map, or For of';
const errors = [ { message } ];

/* eslint-disable max-len */
ruleTester.run('no-c-like-loops', rule, {
    valid: [
        'list.forEach(function(item) { });',
        'list.forEach((item) => { });',
        'for (const item of list) { }'
    ],
    invalid: [
        {
            code: 'for (var i = 0; i < list.length; i++) { }',
            errors
        },
        {
            code: 'for (var i = 0; i < list.length; i += 1) { }',
            errors
        }
    ]
});
