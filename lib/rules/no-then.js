
'use strict';

module.exports = function(context) {
    return {
        CallExpression: function(node) {
            var callee = node.callee;
            var isThen = (callee.object && callee.object.callee && callee.object.callee.name === 'then') ||
                         (callee.property && callee.property.name === 'then');

             if (!isThen) {
                return;
             }

             context.report({
                node: callee,
                message: 'Do not use .then, instead use async / await'
             });
         }
     };
};

module.exports.schema = [];
