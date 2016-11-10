
'use strict';

module.exports = function(context) {
    return {
        ExpressionStatement: function(node) {
            var left = node.expression.left;
            var right = node.expression.right;
            var isIndexOfEqualToMinusOne = left
                && left.callee
                && (left.callee.property.name === 'indexOf')
                && (
                    ((right.operator === '-') && (right.argument.value === 1))
                    || (right.value > 0)
                )

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
