

module.exports = {
    rules: {
        'no-void-map': require('./lib/rules/no-void-map.js'),
        'no-c-like-loops': require('./lib/rules/no-c-like-loops.js'),
        'prefer-includes': require('./lib/rules/prefer-includes.js'),
        'no-then': require('./lib/rules/no-then'),
        'no-window': require('./lib/rules/no-window'),
        'no-numeric-endings-for-variables': require('./lib/rules/no-numeric-endings-for-variables'),
        'force-native-methods': require('./lib/rules/force-native-methods'),
        'no-duplicated-chains': require('./lib/rules/no-duplicated-chains'),
        'classbody-starts-with-newline': require('./lib/rules/classbody-starts-with-newline'),
        'no-filter-instead-of-find': require('./lib/rules/no-filter-instead-of-find')
    },
    configs: {
        recommended: {
            rules: {
                'more/no-void-map': 2,
                'more/no-c-like-loops': 2,
                'more/prefer-includes': 2,
                'more/no-then': 2,
                'more/no-window': 2,
                'more/no-numeric-endings-for-variables': 2,
                'more/force-native-methods': 2,
                'more/no-duplicated-chains': 2,
                'more/classbody-starts-with-newline': [2, 'never'],
                'more/no-filter-instead-of-find': 2
            }
        }
    }
};
