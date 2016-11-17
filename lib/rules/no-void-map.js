
'use strict';

module.exports = function(context) {
    return {
        ExpressionStatement: function(node) {
            var whereAssignment = (node.type === 'ExpressionStatement')
                && (node.expression.type === 'CallExpression')
                && node.expression.callee
                && node.expression.callee.property
                && (node.expression.callee.property.name === 'map');

            if (whereAssignment) {
                context.report({
                    node,
                    message: 'Here you have to assign this expression to variable or add other function to map'
                });
            }
        }
    };
};

module.exports.schema = [];
