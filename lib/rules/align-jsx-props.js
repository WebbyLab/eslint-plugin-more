
module.exports = context => {
    const source = context.getSourceCode();

    function reportSpacesLeft(node, options) {
        const isPositive = options.left > 0;

        context.report({
            node,
            message: `${isPositive ? 'Add' : 'Remove'} ${Math.abs(options.left)} spaces characters after attribute declaraion`,
            fix: fixer => {
                return isPositive
                    ? fixer.insertTextAfter(node.name, ' '.repeat(options.left))
                    : fixer.removeRange([node.name.end, node.name.end - options.left]);
            }
        });
    }

    function reportSpacesRight(node, options) {
        const isPositive = options.right > 0;
        const { value } = node;

        context.report({
            node:    value,
            message: `${isPositive ? 'Remove' : 'Add'} ${Math.abs(options.right)} spaces characters before attribute value`,
            fix: fixer => {
                return isPositive
                    ? fixer.removeRange([value.start - options.right, value.start])
                    : fixer.insertTextBefore(value, ' ');
            }
        });
    }

    function checkOneLine(node) {
        const line = node.loc.start.line;

        return node.attributes.every(attribute => attribute.loc.start.line === line);
    }

    function checkAlign(attributes) {
        const filtered = attributes.filter(attribute => attribute.value);
        const position = Math.max(...filtered.map(attr => attr.name.loc.end.column + 1));

        filtered.forEach(attribute => {
            const token = source.getTokenAfter(attribute.name);

            if (token.loc.start.column === position && token.end + 1 === attribute.value.start) return;

            const options = {
                left:  position - token.loc.start.column,
                right: attribute.value.loc.start.column - token.loc.end.column - 1
            };

            if (options.left)  reportSpacesLeft(attribute, options);
            if (options.right) reportSpacesRight(attribute, options);
        });
    }

    function checkJSX(node) {
        const attributes = node.attributes;

        if (attributes.length) {
            if (checkOneLine(node)) return;

            checkAlign(attributes);
        }
    }

    return {
        JSXOpeningElement: checkJSX
    };
};

module.exports.schema = [];
