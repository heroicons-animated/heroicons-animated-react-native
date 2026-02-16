import path from "node:path";
import { fileURLToPath } from "node:url";
import expoMetroConfig from "expo/metro-config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { getDefaultConfig } = expoMetroConfig;

const config = getDefaultConfig(__dirname);

// Ensure metro can resolve the workspace package
const packagePath = path.resolve(__dirname, "packages/react-native");

config.watchFolders = [packagePath];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(packagePath, "node_modules"),
];

export default config;
