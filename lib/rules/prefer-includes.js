

module.exports = function (context) {
    return {
        ExpressionStatement(node) {
            const expression = node.expression || {};
            const left = expression.left || {};
            const right = expression.right || {};
            const operator = expression.operator;

            const compareWithMinusOne = right.operator === '-' && right.argument.value === 1;
            const lessThanZero = operator === '<' && right.value === 0;
            const moreOrEqualThanZero = operator === '>=' && right.value === 0;
            const isIndexOfEqualToMinusOne = left
                && left.callee
                && (left.callee.property.name === 'indexOf')
                && (compareWithMinusOne || lessThanZero || moreOrEqualThanZero);


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
