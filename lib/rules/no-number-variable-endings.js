
'use strict';

module.exports = function(context) {
    return {
        VariableDeclaration : function(node) {
            var declarations = node.declarations;

            var isOk = true;

            for (var i = 0; i < declarations.length; i++) {
                var node = declarations[i];
                var regexp = /\d+$/;

                if (regexp.test(node.id.name)) isOk = false;
            }

            if (isOk) return;

            context.report({
                node: node,
                message: 'Do not use variables with numeric endings'
            });
        }
    };
};

module.exports.schema = [];
