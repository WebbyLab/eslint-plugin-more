

module.exports = function (context) {
    return {
        ForStatement(node) {
            const isFor = (node.update.operator === '++') || (node.update.operator === '+=');

            if (isFor) {
                context.report({
                    node,
                    message: 'Do not use c-like loop with i++ or i +=1, instead use forEach, Map, or For of'
                });
            }
        }
    };
};

module.exports.schema = [];
