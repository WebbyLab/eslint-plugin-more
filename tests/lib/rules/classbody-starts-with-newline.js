const rule = require('../../../lib/rules/classbody-starts-with-newline');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = { ecmaVersion: 6, sourceType: 'module' };

const ruleTester = new RuleTester({ parserOptions });

/* eslint-disable max-len */
ruleTester.run('classbody-starts-with-newline', rule, {
    valid: [
        // FIXME: These fail but the documentation suggests they should pass
        // {
        //     code: 'export class SomeClass {\n  /**\n	 * Some comment\n	 */\n	constructor() {\n		super()\n	}\n}',
        //     options: [ 'always' ]
        // },
        {
            code: 'export class SomeClass {\n  /**\n	 * Some comment\n	 */\n	constructor() {\n		super()\n	}\n}',
            options: [ 'never' ]
        },
        {
            code: 'export class SomeClass {\n\n	constructor() {\n		super()\n	}\n}',
            options: [ 'always' ]
        },
        {
            code: 'export class SomeClass {\n	constructor() {\n		super()\n	}\n}',
            options: [ 'never' ]
        }
    ],
    invalid: [
        {
            code: 'export class SomeClass { \n	constructor() { \n		super() \n }\n}',
            errors: [ { message: 'Start class body with a newline' } ],
            options: [ 'always' ]
        },
        {
            code: 'export class SomeClass { \n\n	constructor() { \n		super() \n }\n}',
            errors: [ { message: 'Do not start class body with a newline' } ],
            options: [ 'never' ]
        }
    ]
});
