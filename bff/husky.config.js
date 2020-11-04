module.exports = {
  hooks: {
    'pre-commit': 'tsc && lint-staged',
    'pre-push': 'yarn test && yarn improved-yarn-audit --fail-on-missing-exclusions --ignore-dev-deps',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
