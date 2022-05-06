module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'eslint-plugin-import'],
  extends: [
    // default lib for RN
    '@react-native-community',
    'eslint:recommended',
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Uses prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/newline-after-import': ['warn', {count: 1}],
    '@typescript-eslint/no-var-requires': 0,
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'index',
          'parent',
          'unknown',
          'type',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'builtin',
          },
          {
            pattern: 'react**',
            group: 'external',
          },
          {
            pattern: '@react**',
            group: 'external',
          },
          {
            pattern: 'react-native**',
            group: 'external',
          },
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@shared/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@src/**',
            group: 'index',
          },
          {
            pattern: './helpers/**',
            group: 'parent',
          },
          {
            pattern: '@helpers/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@modules/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@hooks/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@store/**',
            group: 'object',
            position: 'before',
          },
          {
            pattern: '@constants/**',
            group: 'object',
            position: 'before',
          },
          {
            pattern: '@storeSlices/**',
            group: 'object',
          },
          {
            pattern: '@theme/**',
            group: 'object',
          },
          {
            pattern: './styles',
            group: 'object',
          },
          {
            pattern: '@navigationTypes**',
            group: 'type',
            position: 'before',
          },
          {
            pattern: '@storeTypes/**',
            group: 'type',
          },
          {
            pattern: './types',
            group: 'type',
          },
          {
            pattern: '@assets/**',
            group: 'object',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order:
            'desc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
};
