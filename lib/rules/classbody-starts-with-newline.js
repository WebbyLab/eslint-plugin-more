//No empty string after class definition (before varructor) (with fixer)

module.exports = function(context) {
    var sourceCode = context.getSourceCode();

    var mode = context.options[0] || 'never';

    function checkForNewLine(node) {
        var nextNode = node.body[0];

        if (nextNode.type !== 'ClassProperty' && nextNode.type !== 'MethodDefinition') {
            return;
        }

        var nextLineNum = node.loc.start.line + 1;
        var bodyStartsWithNewLine = nextNode.loc.start.line > nextLineNum;


        var comments = sourceCode.getComments(nextNode).leading;

        if (comments.length && comments[0].loc.start.line === nextLineNum) {
            // It is not a new line it is a comment
            bodyStartsWithNewLine = false;
        }


        if (mode === 'never' && bodyStartsWithNewLine ) {
            context.report({
                node,
                loc: {
                    start: {line: nextLineNum},
                    end: {line: nextLineNum}
                },
                message: 'Do not start class body with a newline'
            });
        } else if (mode === 'always' && !bodyStartsWithNewLine ) {
             context.report({
                node,
                loc: {
                    start: {line: nextLineNum},
                    end: {line: nextLineNum}
                },
                message: 'Start class body with a newline'
            });
        }
    }

    return {
         ClassBody: checkForNewLine
    };
};

module.exports.schema = [
    {
        enum: ["never", "always"]
    }
];
