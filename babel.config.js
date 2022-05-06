module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        useTransformReactJSXExperimental: true,
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
