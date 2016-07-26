
"use strict";

module.exports = {
    rules: {
        'no-then': require('./lib/rules/no-then'),
        'no-window': require('./lib/rules/no-window'),
        'no-number-variable-endings': require('./lib/rules/no-number-variable-endings'),
        'force-native-methods': require('./lib/rules/force-native-methods')


    },
    configs: {
    recommended: {
      rules: {
        'webbylab/no-then': 2,
        'webbylab/no-window': 2,
        'no-number-variable-endings': 2,
        'force-native-methods': 2
      }
    }
  }
};