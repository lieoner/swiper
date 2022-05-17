/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: true,
                inlineRequires: true,
            },
        }),
        getTransformModulePath() {
            return require.resolve('./transformer');
        },
        maxWorkers: 2,
    },
};
