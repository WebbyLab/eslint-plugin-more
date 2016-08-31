
"use strict";

module.exports = {
    rules: {
        'no-then': require('./lib/rules/no-then'),
        'no-window': require('./lib/rules/no-window'),
        'no-numeric-endings-for-variables': require('./lib/rules/no-numeric-endings-for-variables'),
        'force-native-methods': require('./lib/rules/force-native-methods'),
        'no-duplicated-chains': require('./lib/rules/no-duplicated-chains'),
        'classbody-starts-with-newline': require('./lib/rules/classbody-starts-with-newline')
    },
    configs: {
    recommended: {
      rules: {
        'more/no-then': 2,
        'more/no-window': 2,
        'more/no-numeric-endings-for-variables': 2,
        'more/force-native-methods': 2,
        'more/no-duplicated-chains': 2,
        'more/classbody-starts-with-newline': [2, 'never']
      }
    }
  }
};
