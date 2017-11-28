module.exports = {
    meta: {
        docs: {
            description: 'Prevent using constructor in React components, insted use static propTypes properties',
            category: 'Best Practices'
        }
    },

    create: (context) => {
        const componentsList = [];

        function reportConstructorInComponent(node) {
            context.report({
                node,
                message: 'Do not use constructor in React components'
            });
        }

        function detectComponent(node) {
            if (node.superClass &&
               ((node.superClass.name === 'Component') ||
                (node.superClass.object && node.superClass.object.name === 'React'))) {
                componentsList.push(node);
            }
        }

        function exit() {
            let constructors = [];

            componentsList.forEach(component => {
                const methods = component.body.body.filter(node =>
                    node.type === 'MethodDefinition' &&
                    node.kind === 'constructor');

                constructors = constructors.concat(methods);
            });

            constructors.forEach(node => {
                reportConstructorInComponent(node);
            });
        }

        return {
            ClassExpression : detectComponent,
            ClassDeclaration: detectComponent,
            'Program:exit'  : exit
        };
    }
};
