module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'extends': [
    'eslint:recommended',
    '@wemake-services/typescript/recommended',
    '@wemake-services/javascript',
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  'rules': {
    'no-mixed-spaces-and-tabs': 0,
    'no-tabs': 0,
  },
}
