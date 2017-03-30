
'use strict';

module.exports = function(context) {
    var DEFAULT_EXCLUDE = ['postMessage', 'open', 'addEventListener', 'removeEventListener'];
    var exclude         = context.options[0] && context.options[0].exclude || DEFAULT_EXCLUDE;

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
        MemberExpression: function(node) {
            var objectName = node.object.name;

            if (!isWindow(objectName)) return;

            var propName = node.property.name;

            if (checkExclude(propName)) {
                report(node);
            }
        },

        VariableDeclarator: function(node) {
            var initName = node.init.name;

            if (!isWindow(initName)) return;

            for (var property of node.id.properties) {
                var propName = property.key.name;

                if (checkExclude(propName)) {
                    report(node.init);
                }
            }
        }

    };
};

module.exports.schema = [{
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
}];
