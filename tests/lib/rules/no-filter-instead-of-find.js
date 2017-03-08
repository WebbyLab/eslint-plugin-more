const rule = require('../../../lib/rules/no-filter-instead-of-find');
const RuleTester = require('eslint/lib/testers/rule-tester');

const ruleTester = new RuleTester();

ruleTester.run('no-filter-instead-of-find', rule, {
    valid: [
        'this.obj[0]',
        'arr.filter(filterFunction)'
    ],
    invalid: [
        {
            code: 'arr.filter(filterFunction)[0]',
            errors: [ { message: 'Do not use \'filter\' to find one element, use find method instead' } ]
        }
    ]
});
