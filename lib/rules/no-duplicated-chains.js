

module.exports = function (context) {
    const longChains = [];
    let isInsideCallExpression = false;

    // to avoid subexpressions output
    let memberExpressionsDepth = 0;

    function startFunction() {
        longChains.push({});
    }

    function endFunction() {
        longChains.pop();
    }

    function incrementChainCount(chain) {
        if (longChains.length) {
            if (longChains[longChains.length - 1][chain]) {
                longChains[longChains.length - 1][chain]++;
            } else {
                longChains[longChains.length - 1][chain] = 1;
            }

            return longChains[longChains.length - 1][chain];
        }

        return 0;
    }

    function pauseChecking() {
        isInsideCallExpression = true;
    }

    function resumeChecking() {
        isInsideCallExpression = false;
    }

    function checkLongChainForDuplication(node) {
        memberExpressionsDepth++;

        if (memberExpressionsDepth > 1
           || isInsideCallExpression
           || !node.object
           || node.object.type !== 'MemberExpression'
           || node.computed
       ) {
            return;
        }


        const pathParts   = [];
        let parent = node;
        let depth  = 0;

        while (parent) {
            if (parent.computed) {
                break;
            }

            if (parent.type === 'ThisExpression') {
                pathParts.push('this');
            } else if (parent.type === 'MemberExpression') {
                pathParts.push(parent.property.name);
            } else if (parent.type === 'Identifier') {
                pathParts.push(parent.name);
            } else {
                break;
            }

            depth++;
            parent = parent.object;
        }


        if (depth <= 2) {
            return;
        }

        const path = pathParts.reverse().join('.');
        const chainCount = incrementChainCount(path);

        if (chainCount >= 2) {
            context.report({
                node,
                message: `Do not duplicate long chains. Assign "${  path  }" to a variable or destruct it.`
            });
        }
    }

    return {
        'FunctionDeclaration': startFunction,
        'FunctionExpression': startFunction,
        'ArrowFunctionExpression': startFunction,
        'FunctionDeclaration:exit': endFunction,
        'FunctionExpression:exit': endFunction,
        'ArrowFunctionExpression:exit': endFunction,
        'MemberExpression': checkLongChainForDuplication,
        'MemberExpression:exit'() {
            memberExpressionsDepth--;
        },
        'CallExpression': pauseChecking,
        'CallExpression:exit': resumeChecking

    };
};

module.exports.schema = [];
