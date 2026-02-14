const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Ensure metro can resolve the workspace package
const packagePath = path.resolve(__dirname, "packages/react-native");

config.watchFolders = [packagePath];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(packagePath, "node_modules"),
];

module.exports = config;
