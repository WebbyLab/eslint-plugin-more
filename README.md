# eslint-plugin-more - extra rules for Eslint

[![NPM](https://nodei.co/npm/eslint-plugin-more.png?compact=true)](https://npmjs.org/package/eslint-plugin-more)

Eslint is a very great tool and it already has tons of rules. Eslint allows us to reduce amount of time required for code review. But, of course, eslint cannot cover all the issues. So, we do in the following way, if during code review we see, that we comment on thing that is possible to check automatically, then we create new eslint rule.

Some of this rules will go to upstream after proving them in our codebase.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
```

If you installed `ESLint` globally, you have to install this plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-more
```

# Configuration

Add `plugins` section and specify ESLint-plugin-more as a plugin.

```json
{
  "plugins": [
    "more"
  ]
}
```

Finally, enable all of the rules that you would like to use. For example:

```json
  "rules": {
    "more/no-void-map": 2,
    "more/no-c-like-loops": 2,
    "more/prefer-includes": 2,
    "more/no-then": 2,
    "more/no-window": 2,
    "more/no-numeric-endings-for-variables": 2,
    "more/no-filter-instead-of-find": 2,
    "more/force-native-methods": 2,
    "more/no-duplicated-chains": 2,
    "more/classbody-starts-with-newline": [2, 'never']
  }
```

# Supported rules
* [no-void-map](docs/no-void-map.md): Prohibits the use of array.map without variable or property
* [no-c-like-loops](docs/no-c-like-loops.md): Prohibits the use of 'For loop' with ++ or +=
* [prefer-includes](docs/prefer-includes.md): Prohibits the use of comparison array.indexOf() == -1 and ask to use 'includes' instead
* [no-then](docs/no-then.md): Forces the use of async / await instead of then
* [no-window](docs/no-window.md): Prohibits the usage of `window` global
* [force-native-methods](docs/force-native-methods.md): - Forces the use of native methods instead of lodash/underscore
* [no-filter-instead-of-find](docs/no-filter-instead-of-find.md): - Prohibits using Array.prototype.filter to find one element and asks to use 'find' instead.
* [no-numeric-endings-for-variables](docs/no-numeric-endings-for-variables.md): - Prohibits the use of variables that end in numerics.
* [no-duplicated-chains](docs/no-duplicated-chains.md): - Prohibits the duplication of long chains like `this.props.user.name`
* [classbody-starts-with-newline](docs/classbody-starts-with-newline.md) - Prohibits an empty line at the beggining of a class body

## Author
WebbyLab (https://webbylab.com)
