module.exports = {
    create(context) {
        return {
            MemberExpression(node) {
                const property = node.property;
                const isPropertyZero = property.type === 'Literal' && property.value === 0;
                const isFilterExpression = node.object.type === 'CallExpression' && node.object.callee
                    && node.object.callee.property && node.object.callee.property.name === 'filter';

                if (isFilterExpression && isPropertyZero) {
                    context.report({
                        node,
                        message: 'Do not use \'filter\' to find one element, use find method instead'
                    });
                }
            }
        };
    }
};

module.exports.schema = [];
