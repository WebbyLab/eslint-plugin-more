'use strict';

module.exports = function(context) {
  return {
    ExpressionStatement: function(node) {
      var isIndexOfEqualToMinusOne = (node.expression.left) && (node.expression.left.callee) && (node.expression.left.callee.property.name === 'indexOf') && (node.expression.right.operator === '-') && (node.expression.right.argument.value === 1);;

       if (isIndexOfEqualToMinusOne) {
         context.report({
            node,
            message: 'Do not use indexOf, instead use includes '
         });
       }
     }
    };
  };

module.exports.schema = [];
