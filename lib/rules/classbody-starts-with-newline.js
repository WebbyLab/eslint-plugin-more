//No empty string after class definition (before constructor) (with fixer)

module.exports = function(context) {
    const sourceCode = context.getSourceCode();

    const mode = context.options[0] || 'never';

    function checkForNewLine(node) {
        const nextNode = node.body[0];

        if (nextNode.type !== 'ClassProperty' && nextNode.type !== 'MethodDefinition') {
            return;
        }

        const nextLineNum = node.loc.start.line + 1;
        let bodyStartsWithNewLine = nextNode.loc.start.line > nextLineNum;


        const comments = sourceCode.getComments(nextNode).leading;

        if (comments.length && comments[0].loc.start.line === nextLineNum) {
            // It is not a new line it is a comment
            bodyStartsWithNewLine = false;
        }


        if (mode === 'never' && bodyStartsWithNewLine ) {
            return context.report({
                node,
                loc: {
                    start: {line: nextLineNum},
                    end: {line: nextLineNum}
                },
                message: 'Do not start class body with a newline'
            });
        }

        if (mode === 'always' && !bodyStartsWithNewLine ) {
            return context.report({
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

module.exports.schema = [];
