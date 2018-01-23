// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    "no-restricted-syntax": ["off", "BinaryExpression[operator='in']"],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-dynamic-require': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-use-before-define": ["error", { "functions": false,}],
    "no-unused-vars": 0,

    "no-console": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "padded-blocks": 0,
    "prefer-const": 1,
    "linebreak-style":0,
    "max-len":0,
    "arrow-body-style": ["off"],
    "no-lonely-if": 0,
  }
}
