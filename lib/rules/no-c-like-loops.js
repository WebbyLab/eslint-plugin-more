'use strict';

module.exports = function(context) {
  return {
    ForStatement: function(node) {
      var opeR = (node.update.operator === '+=') || (node.update.operator === '++');
      if (opeR) {
        context.report({
           message: 'use "forEach" "map" "for of" instead of c-like loop".'
        });
      }
    }
  };
};

module.exports.schema = [];
