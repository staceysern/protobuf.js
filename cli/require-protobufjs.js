"use strict";

module.exports = function requireProtobufjs() {
    try {
        // local development, i.e. forked from github
        require.resolve("..");
        return require("..");
    } catch (e) {
        // installed as a peer dependency
        try {
            require.resolve("protobufjs");
            return require("protobufjs");
        } catch (e) {
            // we should only ever hit this case when the developer installs protobufjs-cli
            // but forgets to install protobufjs with npm/yarn.
            throw new Error("protobufjs could not be resolved. Make sure that it is installed.");
        }
    }
}
