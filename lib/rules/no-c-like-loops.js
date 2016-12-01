
'use strict';

module.exports = function(context) {
    return {
        ForStatement: function(node) {
            var nodeUpdate = node.update
            var isFor = nodeUpdate
            && nodeUpdate !== null
            && ((nodeUpdate.operator === '++')
                || (nodeUpdate.operator !== '+='));

            if (isFor) {
                context.report({
                    node,
                    message: 'Do not use c-like loop with i++ or i +=1, instead use forEach, Map, or For of' + node.update
                });
            }
        }
    };
};

module.exports.schema = [];
