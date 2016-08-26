# eslint-plugin-more - extra rules for Eslint

Eslint is a very great tool and it already has tons of rules. Eslint allows us to reduce amount of time required for code review. But, of course, eslint cannot cover all the issues. So, we do in the following way, if during code review we see, that we comment on thing that is possible to check automatically, then we create new eslint rule.

Some of this rules will go to upstream after proving them in our codebase.

## Supported rules

* no-then - forces use of async / await intead of then.
* no-window - prohibits usage of "window" global.
* force-native-method - forces to use native methods instead of lodash.
* no-numeric-endings-for-variables - prohibits variables with names like "user1" and "user2".
* no-duplicated-chains - prohibits duplication of long chains like "this.props.user.name"
* classbody-starts-with-newline - forces/prohibits new line at the beggining of class body

## Author
WebbyLab (https://webbylab.com)
