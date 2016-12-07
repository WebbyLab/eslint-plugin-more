
'use strict';

module.exports = function(context) {
    return {
        ExpressionStatement: function(node) {
            var expression = node.expression || {};
            var left = expression.left || {};
            var right = expression.right || {};
            var operator = expression.operator;

            var compareWithMinusOne = right.operator === '-' && right.argument.value === 1;
            var lessThanZero = operator === '<' && right.value === 0;
            var isIndexOfEqualToMinusOne = left
                && left.callee
                && (left.callee.property.name === 'indexOf')
                && (compareWithMinusOne || lessThanZero)

            if (isIndexOfEqualToMinusOne) {
                context.report({
                    node,
                    message: 'Do not use indexOf, instead use includes '
                });
            }
        }
    };
};

module.exports.schema = [];
