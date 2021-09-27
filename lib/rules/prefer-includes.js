

module.exports = function (context) {
    return {
        BinaryExpression(node) {
            const left = node.left || {};
            const right = node.right || {};
            const operator = node.operator;

            const isIndexOfCall = left.callee
                && (left.callee.type === 'MemberExpression')
                && (left.callee.property.name === 'indexOf');

            if (!isIndexOfCall) {
                return;
            }

            const compareWithMinusOne = right.operator === '-' && right.argument && right.argument.value === 1;
            const lessThanZero = operator === '<' && right.value === 0;
            const moreOrEqualThanZero = operator === '>=' && right.value === 0;

            const isIndexOfEqualToMinusOne = compareWithMinusOne
                || lessThanZero
                || moreOrEqualThanZero;

            if (isIndexOfEqualToMinusOne) {
                context.report({
                    node,
                    message: 'Do not use indexOf, instead use includes'
                });
            }
        }
    };
};

module.exports.schema = [];
