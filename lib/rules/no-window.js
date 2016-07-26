
'use strict';

module.exports = function(context) {
    return {
        MemberExpression: function(node) {
            const isWindow = node.object.name === "window";

      		if (!isWindow) {
				return;
     		}

      		context.report({
				node: node,
        		message: 'Do not use window'
      		});
    	}
  	};
};

module.exports.schema = [];