
'use strict';

module.exports = function(context) {
    return {
        VariableDeclaration : function(node) {
            var declarations = node.declarations;

            var isOk = true;
            
            declarations.forEach(function(declaration_node) {
                var regexp = /\d+$/;

                if (regexp.test(declaration_node.id.name)) isOk = false;
            });

            if (isOk) return;

            context.report({
                node: node,
                message: 'Do not use variables with numeric endings'
            });
        }
    };
};

module.exports.schema = [];
