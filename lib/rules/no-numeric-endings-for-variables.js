

module.exports = function (context) {
    return {
        VariableDeclaration(node) {
            const declarations = node.declarations;

            let isOk = true;

            declarations.forEach((declarationNode) => {
                const regexp = /\d+$/;

                if (regexp.test(declarationNode.id.name)) isOk = false;
            });

            if (isOk) return;

            context.report({
                node,
                message: 'Do not use variables with numeric endings'
            });
        }
    };
};

module.exports.schema = [];
