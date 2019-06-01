
try {
    // installed as a peer dependency
    require.resolve("protobufjs");
    exports.pathToProtobufJs = "protobufjs";
} catch (e) {
    // local development, i.e. forked from github
    exports.pathToProtobufJs = "..";
}
