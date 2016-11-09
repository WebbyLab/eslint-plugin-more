
'use strict';

module.exports = function(context) {
    return {
        ExpressionStatement: function(node) {
            var left = node.expression.left;
            var right = node.expression.right;
            var isIndexOfEqualToMinusOne = left
                && left.callee
                && (left.callee.property.name === 'indexOf')
                && (right.operator === '-')
                && (right.argument.value === 1)
                //|| ()  Ask Vitya as for additional condition

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
