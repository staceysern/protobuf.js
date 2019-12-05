
try {
    // installed as a peer dependency
    exports.pathToProtobufJs = require.resolve("protobufjs")
} catch (e) {
    // local development, i.e. forked from github
    exports.pathToProtobufJs = require.resolve("..")
}
