
module.exports = context => {
    const REGEX = {
        ipAddress         : /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/i,
        UUID              : /[0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12}$/i,
        alphanumericToken : /(?=.*[a-z])(?=.*[0-9])(?=[a-z0-9]{12,})/i,
        domainName        : /(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?/
    };

    const DEFAULT_FORBID  = [ 'ipAddress', 'UUID', 'alphanumericToken', 'domainName' ];
    const DEFAULT_EXCLUDE = [ 'facebook', 'google', 'yandex' ];

    const forbid  = context.options[0] && context.options[0].forbidContaining  || DEFAULT_FORBID;
    const exclude = context.options[0] && context.options[0].excludeContaining || DEFAULT_EXCLUDE;

    function inspect(regex, node, value) {
        if (typeof value !== 'string') return;

        if (exclude.some(name => value.toLowerCase().includes(name.toLowerCase()))) return;

        if (REGEX[regex].test(value)) {
            return context.report({
                node,
                message : 'Do not use hadrcoded configuration data'
            });
        }
    }

    return {
        VariableDeclarator({ init }) {
            if (init && init.type === 'Literal') {
                return forbid.some(rule => inspect(rule, init, init.value));
            }
        },

        Property({ value }) {
            if (value && value.type === 'Literal') {
                return forbid.some(rule => inspect(rule, value, value.value));
            }
        }
    };
};

module.exports.schema = [ {
    type       : 'object',
    properties : {
        forbidContaining : {
            type  : 'array',
            items : {
                type : 'string'
            }
        },
        excludeContaining : {
            type  : 'array',
            items : {
                type : 'string'
            }
        }
    },
    additionalProperties : false
} ];
