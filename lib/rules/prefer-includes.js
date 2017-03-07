

module.exports = function (context) {
    return {
        ExpressionStatement(node) {
            const left = node.expression.left;
            const right = node.expression.right;
            const isIndexOfEqualToMinusOne = left
                && left.callee
                && (left.callee.property.name === 'indexOf')
                && (
                    ((right.operator === '-') && (right.argument.value === 1))
                    || (right.value > 0)
                );

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
