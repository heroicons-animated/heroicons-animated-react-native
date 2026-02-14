import { useCallback } from "react";
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Colors } from "../constants/theme";
import { LINK } from "../constants/site";

/** Original shield-face logo from heroicons-animated.com */
function LogoIcon({ color, size = 24 }: { color: string; size?: number }) {
  const h = size * (166 / 156);
  return (
    <Svg width={size} height={h} viewBox="0 0 156 166" fill="none">
      <Path
        clipRule="evenodd"
        d="m78.091 0 5.967 5.676c15.038 14.306 35.323 23.067 57.663 23.067.356 0 .711-.002 1.065-.006l6.363-.08 1.988 6.072a102.026 102.026 0 0 1 5.045 31.782c0 47.391-32.269 87.19-75.928 98.477l-2.163.559-2.163-.559C32.27 153.701 0 113.902 0 66.511c0-11.085 1.769-21.772 5.045-31.782l1.988-6.072 6.363.08c.354.004.71.006 1.065.006 22.34 0 42.625-8.761 57.664-23.067L78.09 0Z"
        fill={color}
        fillRule="evenodd"
      />
      <Circle cx="58" cy="78" fill="white" r="14" />
      <Circle cx="98" cy="78" fill="white" r="14" />
      <Circle cx="61" cy="82" fill="black" r="5.5" />
      <Circle cx="95" cy="82" fill="black" r="5.5" />
    </Svg>
  );
}

function HeartIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </Svg>
  );
}

function GitHubIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Svg>
  );
}

function MoonIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
    >
      <Path
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SunIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
    >
      <Path
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function Header() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  const openGitHub = useCallback(() => {
    void Linking.openURL(LINK.GITHUB);
  }, []);

  const openSponsor = useCallback(() => {
    void Linking.openURL(LINK.SPONSOR);
  }, []);

  return (
    <View style={[styles.header, { borderBottomColor: colors.border }]}>
      <View style={styles.headerInner}>
        {/* Logo + Title */}
        <View style={styles.logoGroup}>
          <LogoIcon color={colors.primary} size={24} />
          <Text
            style={[
              styles.logoText,
              {
                color: colors.text,
                fontFamily: Platform.OS === "ios" ? "System" : "sans-serif",
              },
            ]}
            numberOfLines={1}
          >
            heroicons-animated
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          {/* Sponsor */}
          <Pressable
            onPress={openSponsor}
            accessibilityRole="button"
            accessibilityLabel="Sponsor project"
            accessibilityHint="Opens sponsor page"
            style={({ pressed }) => [
              styles.actionButton,
              {
                backgroundColor: pressed
                  ? colorScheme === "dark"
                    ? "rgba(255,255,255,0.15)"
                    : "#f5f5f5"
                  : colorScheme === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "#ffffff",
              },
            ]}
          >
            <HeartIcon color={colors.primary} size={16} />
          </Pressable>

          {/* Theme indicator */}
          <View
            style={[
              styles.actionButton,
              {
                backgroundColor:
                  colorScheme === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
              },
            ]}
          >
            {colorScheme === "dark" ? (
              <MoonIcon color={colors.text} size={16} />
            ) : (
              <SunIcon color={colors.text} size={16} />
            )}
          </View>

          {/* GitHub button */}
          <Pressable
            onPress={openGitHub}
            accessibilityRole="button"
            accessibilityLabel="Open GitHub repository"
            accessibilityHint="Opens the project repository on GitHub"
            style={({ pressed }) => [
              styles.githubButton,
              {
                backgroundColor: pressed
                  ? colorScheme === "dark"
                    ? "rgba(255,255,255,0.15)"
                    : "#e5e5e5"
                  : colorScheme === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "#ffffff",
              },
            ]}
          >
            <GitHubIcon color={colors.text} size={16} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  headerInner: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: -0.3,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  githubButton: {
    width: 36,
    height: 36,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
