export const SITE = {
  NAME: "heroicons-animated",
  PACKAGE: "@heroicons-animated/react-native",
  DESCRIPTION: {
    LONG: "Free open-source library of beautifully animated icons for React Native. Built with Reanimated and Heroicons. Fully customizable SVG icons with smooth animations for iOS and Android.",
    SHORT:
      "Free animated icons library for React Native. Smooth Reanimated-powered Heroicons. MIT licensed.",
  },
  AUTHOR: {
    NAME: "heroicons-animated",
    GITHUB: "heroicons-animated",
  },
} as const;

export const LINK = {
  GITHUB:
    "https://github.com/heroicons-animated/heroicons-animated-react-native",
  SPONSOR: "https://github.com/sponsors/heroicons-animated",
  HEROICONS: "https://heroicons.com",
  REANIMATED: "https://docs.swmansion.com/react-native-reanimated/",
  ORIGINAL: "https://heroicons-animated.com",
  MOTION: "https://motion.dev/",
  LUCIDE_ANIMATED: "https://lucide-animated.com/",
  ANIMATIONS_DEV: "https://animations.dev/",
  ANIKET: "https://aniketpawar.com/",
  LICENSE:
    "https://github.com/heroicons-animated/heroicons-animated-react-native/blob/main/LICENSE",
} as const;

export const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const;
export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

export function getInstallCommand(pm: PackageManager): string {
  switch (pm) {
    case "pnpm":
      return `pnpm add ${SITE.PACKAGE}`;
    case "npm":
      return `npm install ${SITE.PACKAGE}`;
    case "yarn":
      return `yarn add ${SITE.PACKAGE}`;
    case "bun":
      return `bun add ${SITE.PACKAGE}`;
  }
}
