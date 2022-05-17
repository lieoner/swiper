const typescriptTransformer = require('react-native-typescript-transformer');
const obfuscatingTransformer = require('react-native-obfuscating-transformer');

module.exports = obfuscatingTransformer({
    upstreamTransformer: typescriptTransformer,
    obfuscatorOptions: {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: false,
        stringArrayEncoding: false,
        unicodeEscapeSequence: true,
    },
    enableInDevelopment: true,
});
