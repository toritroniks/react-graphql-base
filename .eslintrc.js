module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'max-lines': ['error', { max: 150, skipComments: true }],
    'require-await': 'warn',
    'max-depth': ['warn', 3],
    complexity: ['warn', { max: 20 }],
    'consistent-return': ['error'],
  },
};
