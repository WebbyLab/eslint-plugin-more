

module.exports = function (context) {
    return {
        MemberExpression(node) {
            const isWindow = node.object.name === 'window';

            if (!isWindow) {
                return;
            }

            context.report({
                node,
                message: 'Avoid using window'
            });
        }
    };
};

module.exports.schema = [];
