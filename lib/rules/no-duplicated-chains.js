
'use strict';

module.exports = function(context) {
    const longChains = [];

    function startFunction(node) {
        longChains.push({});
    }

    function endFunction(node) {
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

   function checkLongChainForDuplication(node) {
       if (!node.object || node.object.type !== 'MemberExpression' || node.computed) {
           return;
       }


       let pathParts   = [];
       let parent = node;
       let depth  = 0;

       while (parent) {
           if ( parent.computed ) {
               break;
           }

           if (parent.type === 'ThisExpression') {
                pathParts.push('this');
           } else if (parent.type === 'MemberExpression'){
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
               node: node,
               message: `Do not duplicate long chains. Assign "${path}" to a variable or destruct it.`
           });
       }

   }

   return {
         FunctionDeclaration: startFunction,
         FunctionExpression: startFunction,
         ArrowFunctionExpression: startFunction,
         "FunctionDeclaration:exit": endFunction,
         "FunctionExpression:exit": endFunction,
         "ArrowFunctionExpression:exit": endFunction,
         MemberExpression: checkLongChainForDuplication
    };
};

module.exports.schema = [];
