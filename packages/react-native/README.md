# @heroicons-animated/react-native

**Free open-source library of 316 beautifully animated [Heroicons](https://heroicons.com) for React Native.**

Built with [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) and [react-native-svg](https://github.com/software-mansion/react-native-svg). A React Native port of [heroicons-animated](https://heroicons-animated.com).

[![npm version](https://img.shields.io/npm/v/@heroicons-animated/react-native.svg)](https://www.npmjs.com/package/@heroicons-animated/react-native)
[![license](https://img.shields.io/npm/l/@heroicons-animated/react-native.svg)](https://github.com/heroicons-animated/heroicons-animated-react-native/blob/main/LICENSE)

---

## Features

- **316 animated icons** — full coverage of the Heroicons set
- **Smooth animations** — powered by react-native-reanimated for 60fps native animations
- **Press to animate** — built-in `Pressable` wrapper, or use controlled mode with refs
- **Fully customizable** — size, color, stroke width, and style props
- **Tree-shakable** — import only the icons you need
- **TypeScript** — fully typed with exported interfaces
- **iOS & Android** — works on both platforms out of the box
- **Expo compatible** — works with Expo and bare React Native projects

## Installation

```bash
# Using pnpm
pnpm add @heroicons-animated/react-native

# Using npm
npm install @heroicons-animated/react-native

# Using yarn
yarn add @heroicons-animated/react-native

# Using bun
bun add @heroicons-animated/react-native
```

### Peer Dependencies

Make sure you have the following peer dependencies installed and configured:

```bash
pnpm add react-native-reanimated react-native-svg
```

> **Note:** `react-native-reanimated` requires the Babel plugin. Add `'react-native-reanimated/plugin'` to your `babel.config.js` plugins array.

## Quick Start

```tsx
import { HeartIcon } from "@heroicons-animated/react-native";

export default function App() {
  return <HeartIcon size={32} color="#ef4444" />;
}
```

The icon will animate on press by default.

## Usage

### Default Mode (press to animate)

Simply render the icon — it comes with a built-in `Pressable` wrapper that triggers the animation on tap:

```tsx
import { BellIcon, StarIcon, SparklesIcon } from "@heroicons-animated/react-native";

function NotificationBar() {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <BellIcon size={28} color="#6366f1" />
      <StarIcon size={28} color="#eab308" />
      <SparklesIcon size={28} color="#8b5cf6" />
    </View>
  );
}
```

### Controlled Mode (programmatic animation)

Use `controlled` prop with a ref to trigger animations from code:

```tsx
import { useRef } from "react";
import { Button, View } from "react-native";
import { HeartIcon, type IconHandle } from "@heroicons-animated/react-native";

function LikeButton() {
  const heartRef = useRef<IconHandle>(null);

  const handleLike = () => {
    heartRef.current?.startAnimation();
    // ... your like logic
  };

  return (
    <View>
      <HeartIcon ref={heartRef} size={32} color="#ef4444" controlled />
      <Button title="Like" onPress={handleLike} />
    </View>
  );
}
```

### With Custom Press Handler

```tsx
import { CheckCircleIcon } from "@heroicons-animated/react-native";

function ConfirmButton() {
  return (
    <CheckCircleIcon
      size={24}
      color="#22c55e"
      onPress={() => console.log("Confirmed!")}
    />
  );
}
```

### Individual Icon Imports (tree-shaking)

For optimal bundle size, import individual icons:

```tsx
import { BellIcon } from "@heroicons-animated/react-native/bell";
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `28` | Icon width and height in pixels |
| `color` | `string` | `"currentColor"` | Stroke/fill color |
| `strokeWidth` | `number` | `1.5` | SVG stroke width |
| `style` | `ViewStyle` | — | Additional styles for the container |
| `controlled` | `boolean` | `false` | Disable built-in Pressable wrapper for manual control |
| `onPress` | `() => void` | — | Press handler (works in default mode) |

## Ref Handle (`IconHandle`)

When using `controlled` mode, access animations via ref:

| Method | Description |
|--------|-------------|
| `startAnimation()` | Trigger the icon's animation sequence |
| `stopAnimation()` | Reset the icon to its default/idle state |

## Available Icons

This package includes **316 animated icons** matching the [heroicons-animated](https://heroicons-animated.com) library. Every icon from the Heroicons 24px outline set is included with a unique, hand-crafted animation.

Some highlights:

| Icon | Component | Animation |
|------|-----------|-----------|
| Heart | `HeartIcon` | Scale pulse |
| Bell | `BellIcon` | Ring swing |
| Star | `StarIcon` | Scale bounce |
| Check | `CheckIcon` | Draw-on stroke |
| Arrow Path | `ArrowPathIcon` | Rotation spin |
| Sparkles | `SparklesIcon` | Twinkle scale |
| Rocket Launch | `RocketLaunchIcon` | Translate + rotate lift-off |
| Eye | `EyeIcon` | Blink |
| Trash | `TrashIcon` | Shake wobble |
| Cog | `CogIcon` | Gear rotation |

[View all 316 icons →](https://heroicons-animated.com)

## Compatibility

| Dependency | Minimum Version |
|------------|----------------|
| React | >= 18.0.0 |
| React Native | >= 0.72.0 |
| react-native-reanimated | >= 3.0.0 |
| react-native-svg | >= 13.0.0 |
| Expo SDK | >= 49 |

## Credits

- [heroicons-animated](https://heroicons-animated.com) — the original React library by [@alaymanguy](https://x.com/alaymanguy)
- [Heroicons](https://heroicons.com) — icon designs by the makers of Tailwind CSS
- [lucide-animated](https://lucide-animated.com) — inspiration by [@pqoqubbw](https://x.com/pqoqubbw)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) — animation engine by Software Mansion
- [react-native-svg](https://github.com/software-mansion/react-native-svg) — SVG rendering for React Native

## Contributing

Contributions are welcome! Please see the [repository](https://github.com/heroicons-animated/heroicons-animated-react-native) for development instructions.

## License

[MIT](https://github.com/heroicons-animated/heroicons-animated-react-native/blob/main/LICENSE) — free for personal and commercial use.
