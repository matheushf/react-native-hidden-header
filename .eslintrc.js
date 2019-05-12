module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
        'jsx': true
    }
  },
  'env': {
    'jest': true,
    'node': true, // this is the best starting point
    'browser': true, // for react web
    'es6': true // enables es6 features
  },
  'plugins': [
    'react',
    'react-native'
  ],
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'comma-dangle': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'no-alert': 'off',
    "import/no-extraneous-dependencies": "off",
    'prefer-promise-reject-errors': 'off'
  },
  'globals': {
    'fetch': false,
    'require': true,
  }
}
