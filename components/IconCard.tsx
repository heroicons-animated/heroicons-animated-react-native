import type { IconHandle } from "@heroicons-animated/react-native";
import * as Clipboard from "expo-clipboard";
import { useCallback, useEffect, useRef, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import type { IconMeta } from "../constants/icons";
import { Colors } from "../constants/theme";
import { getIconByName } from "./IconRegistry";

interface IconCardProps {
  icon: IconMeta;
}

function PlayIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg
      fill="none"
      height={size}
      stroke={color}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      width={size}
    >
      <Path
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function PauseIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg
      fill="none"
      height={size}
      stroke={color}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      width={size}
    >
      <Path d="M15.75 5.25v13.5m-7.5-13.5v13.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function ClipboardDocumentIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg
      fill="none"
      height={size}
      stroke={color}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      width={size}
    >
      <Path
        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-1.606c.013.163.02.329.02.497 0 .342-.017.68-.05 1.013m0 0a48.1 48.1 0 0 1-3.478.238h-1.284A48.1 48.1 0 0 1 9.37 7.404m0 0C8.61 7.371 7.856 7.325 7.106 7.267A2.227 2.227 0 0 1 5.25 5.046V4.286c0-.89.527-1.7 1.346-2.063a47.933 47.933 0 0 1 4.655-1.575l.157-.037a.75.75 0 0 1 .334 0l.157.037a47.933 47.933 0 0 1 4.655 1.575c.819.363 1.346 1.173 1.346 2.063v.76"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconCard({ icon }: IconCardProps) {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const iconRef = useRef<IconHandle>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const IconComponent = getIconByName(icon.name);
  const monoFont = Platform.OS === "ios" ? "Menlo" : "monospace";

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!IconComponent) {
    return null;
  }

  const handlePress = useCallback(() => {
    if (isAnimating) {
      iconRef.current?.stopAnimation();
      setIsAnimating(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } else {
      iconRef.current?.startAnimation();
      setIsAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        iconRef.current?.stopAnimation();
      }, 1500);
    }
  }, [isAnimating]);

  const handleLongPress = useCallback(async () => {
    const importStr = `import { ${icon.componentName} } from "@heroicons-animated/react-native";`;
    await Clipboard.setStringAsync(importStr);
  }, [icon.componentName]);

  return (
    <Pressable
      accessibilityHint="Tap to preview animation. Long press to copy import statement."
      accessibilityLabel={`${icon.displayName} icon card`}
      accessibilityRole="button"
      onLongPress={handleLongPress}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: pressed
            ? colors.surfaceHover
            : colorScheme === "dark"
              ? "#0a0a0a"
              : "#ffffff",
        },
      ]}
    >
      {/* Play/Pause button (touch devices) */}
      <Pressable
        accessibilityLabel={isAnimating ? "Pause icon animation" : "Play icon animation"}
        accessibilityRole="button"
        accessibilityState={{ selected: isAnimating }}
        hitSlop={4}
        onPress={handlePress}
        style={[
          styles.playButton,
          {
            backgroundColor:
              colorScheme === "dark" ? "rgba(38,38,38,0.2)" : "rgba(229,229,229,0.2)",
          },
        ]}
      >
        {isAnimating ? (
          <PauseIcon color={colors.icon} size={16} />
        ) : (
          <PlayIcon color={colors.icon} size={16} />
        )}
      </Pressable>

      {/* Icon */}
      <View style={styles.iconContainer}>
        <IconComponent color={colors.icon} controlled ref={iconRef} size={40} />
      </View>

      {/* Label */}
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={[
          styles.label,
          {
            color: colorScheme === "dark" ? "#d4d4d4" : "#9f9fa9",
            fontFamily: monoFont,
          },
        ]}
      >
        {icon.name}
      </Text>

      {/* Actions row */}
      <View style={styles.actionsRow}>
        <Pressable
          accessibilityHint="Copies icon import to clipboard"
          accessibilityLabel="Copy import statement"
          accessibilityRole="button"
          onPress={handleLongPress}
          style={({ pressed }) => [
            styles.actionButton,
            {
              backgroundColor: pressed
                ? colorScheme === "dark"
                  ? "#404040"
                  : "#e5e5e5"
                : colorScheme === "dark"
                  ? "rgba(38,38,38,0.2)"
                  : "rgba(229,229,229,0.2)",
            },
          ]}
        >
          <ClipboardDocumentIcon color={colors.icon} size={16} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 28,
    borderRadius: 20,
    minWidth: 150,
    flex: 1,
    position: "relative",
  },
  playButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 36,
    lineHeight: 16,
  },
  actionsRow: {
    marginVertical: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
