module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss'],
    ignoreFiles: ['**/*.html', '**/*.js'],
    rules: {
      'no-empty-source': null,
      'media-feature-name-no-unknown': null,
      'at-rule-no-unknown': null,
      'selector-pseudo-element-colon-notation': null,
      'no-duplicate-selectors': null,
      'rule-empty-line-before': [
        'always',
        {
          except: ['after-single-line-comment'],
        },
      ],
    },
  }
  