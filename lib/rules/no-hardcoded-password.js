
module.exports = context => {
    function inspectHardcodedPassword(node, value) {
        const isHardcoded = value.toLowerCase().includes('passw');

        if (isHardcoded) {
            return context.report({
                node,
                message : 'Do not use hadrcoded password'
            });
        }
    }

    return {
        VariableDeclarator({ id, init }) {
            if (id && id.name && init && init.type === 'Literal' ) {
                return inspectHardcodedPassword(id, id.name);
            }
        },

        Property({ key, value }) {
            if (!key || !value || value.type !== 'Literal') return;

            if (key.type === 'Identifier') {
                return inspectHardcodedPassword(key, key.name);
            }

            if (key.type === 'Literal') {
                return inspectHardcodedPassword(key, key.value);
            }

            if (key.type === 'TemplateLiteral') {
                return key.quasis.some(element => inspectHardcodedPassword(key, element.value.raw));
            }
        }
    };
};

module.exports.schema = [];