'use strict';

module.exports = function(context) {
  return {
    BinaryExpression: function(node) {
      var indexOf = node.left.callee.property.name == 'indexOf';

        if (indexOf) {
         var opeR = node.right.operator == '-';
          var vaL = node.right.argument.value == '1';
          if (opeR && vaL) {
           context.report({
              message: 'You have not to use indexOf(). Use Array.prototype.includes instead'
           });
          }
        }
      }
    };
  };

module.exports.schema = [];
