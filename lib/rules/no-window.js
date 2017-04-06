
module.exports = function (context) {
    const DEFAULT = ['postMessage', 'open', 'addEventListener', 'removeEventListener'];
    const exclude = context.options[0] && context.options[0].exclude || DEFAULT;

    function report(node) {
        context.report({
            node,
            message: 'Avoid using window'
        });
    }

    function isWindow(name) {
        return name === 'window';
    }

    function checkExclude(name) {
        return exclude.indexOf(name) === -1;
    }

    return {
        MemberExpression(node) {
            if (!node.object) return;

            const objectName = node.object.name;

            if (!isWindow(objectName)) return;

            const propName = node.property.name;

            if (checkExclude(propName)) {
                report(node);
            }
        },

        VariableDeclarator(node) {
            if (!node.init) return;

            const initName = node.init.name;

            if (!isWindow(initName)) return;

            for (const property of node.id.properties) {
                const propName = property.key.name;

                if (checkExclude(propName)) {
                    report(node.init);
                }
            }
        }

    };
};

module.exports.schema = [ {
    type: 'object',
    properties: {
        exclude: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    },
    additionalProperties: false
} ];
