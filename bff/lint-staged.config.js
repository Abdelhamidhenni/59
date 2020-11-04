module.exports = {
  'src/**/*.{json,md}': ['prettier --write'],
  'src/**/*.{ts,js}': ['eslint --ext .ts,.js src test --fix', 'jest --findRelatedTests'],
};
