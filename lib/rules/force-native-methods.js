

module.exports = function (context) {
    return {
        CallExpression(node) {
            const callee = node.callee;
            const objectName = callee.name || (callee.object && callee.object.name);
            const notAllowedMethods = ['find', 'findIndex', 'indexOf', 'each', 'every', 'filter', 'includes', 'map',
                'reduce', 'toLower', 'toUpper', 'trim', 'keys'];

            if ((objectName === '_' || objectName === 'lodash' || objectName === 'underscore')
            && callee.property && notAllowedMethods.indexOf(callee.property.name) !== -1) {
                context.report({
                    node,
                    message: 'Do not use lodash methods, use native instead'
                });
            }
        }
    };
};

module.exports.schema = [];
