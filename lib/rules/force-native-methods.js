
'use strict';

module.exports = function(context) {
    return {
        CallExpression: function(node) {
            var callee = node.callee;
            var objectName = callee.name || (callee.object && callee.object.name);
            var notAllowedMethods = [ 'find', 'findIndex', 'indexOf', 'each', 'every', 'filter', 'includes', 'map',
                'reduce', 'toLower', 'toUpper', 'trim', 'keys' ];

            if ((objectName === '_' || objectName === 'lodash' || objectName === 'underscore')
            && callee.property && notAllowedMethods.indexOf(callee.property.name) !== -1) {
                context.report({
                    node,
                    message: 'Do not use lodash methods, use native instead'
                });
            }
    	}
  	};
};

module.exports.schema = [];