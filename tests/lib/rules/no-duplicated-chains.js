const rule = require('../../../lib/rules/no-duplicated-chains');
const RuleTester = require('eslint/lib/testers/rule-tester');

const parserOptions = {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 6,
    sourceType: 'module'
};

const ruleTester = new RuleTester({ parserOptions });

/* eslint-disable max-len */
ruleTester.run('no-duplicated-chains', rule, {
    valid: [
        'function render() {\n\tconst { className, text } = this.props;\n\treturn (<div className={className}>\n\t\t<p>{text}</p>\n\t</div>);\n}',
        'function render() {\n\tconst props = this;\n\treturn (<div className={props.className}>\n\t\t<p>{props.text}</p>\n\t</div>);\n}'
    ],
    invalid: [
        {
            code: 'function render() {\n\treturn (<div className={this.props.className}>\n\t\t<p>{this.props.className}</p>\n\t</div>);\n}',
            errors: [ { message: '' } ]
        }
        // FIXME: This passes but the documentation suggests it should fail
        // {
        //     code: 'function render() {\n\treturn (<div className={this.props.className}>\n\t\t<p>{this.props.text}</p>\n\t</div>);\n}',
        //     errors: [ { message: '' } ]
        // }
    ]
});
