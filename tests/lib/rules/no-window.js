const rule = require('../../../lib/rules/no-window');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 6, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

const message = 'Avoid using window';
const errors = [ { message } ];

/* eslint-disable max-len */
ruleTester.run('no-window', rule, {
    valid: [
        'let a; function foo() { a = 5; }'
    ],
    invalid: [
        {
            code: 'window.detail = 5;',
            errors
        },
        {
            code: 'function setDetail(detail) { window.detail = detail; }',
            errors
        },
        {
            code: 'function getDetail() { return window.detail; }',
            errors
        }
    ]
});
