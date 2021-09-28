const { RuleTester } = require('eslint/lib/rule-tester')
const rule = require('../../../lib/rules/prefer-includes');

const ruleTester = new RuleTester();

ruleTester.run('prefer-includes', rule, {
    valid: [
        'arr.indexOf(2) === 2',
        'arr.indexOf(2) === 0',
        'indexOf(2) >= 0',
        'indexOf(2) < 0',
        'indexOf(2) === -1',
        '[1, 2, 3, 4].includes(2)',
        // Expressions below used to cause ESLint parser bugs
        'foo() + "bar"',
        'obj.field += sum - some.value',
        'parseInt(obj.field, 10) > 5 ? \'abc\' : obj.field'
    ],
    invalid: [
        {
            code: 'arr.indexOf(2) >= 0',
            errors: [ { message: 'Do not use indexOf, instead use includes' } ]
        },
        {
            code: 'arr.indexOf(2) === -1',
            errors: [ { message: 'Do not use indexOf, instead use includes' } ]
        },
        {
            code: 'arr.indexOf(2) < 0',
            errors: [ { message: 'Do not use indexOf, instead use includes' } ]
        },
        {
            code: '[1, 2, 3, 4].indexOf(2) === -1',
            errors: [ { message: 'Do not use indexOf, instead use includes' } ]
        }
    ]
});
