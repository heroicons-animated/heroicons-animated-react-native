import { useCallback } from "react";
import { Linking, Platform, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { ALL_ICONS } from "../constants/icons";
import { LINK } from "../constants/site";
import { Colors } from "../constants/theme";

const ICON_COUNT = ALL_ICONS.length;

export function HeroSection() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const monoFont = Platform.OS === "ios" ? "Menlo" : "monospace";
  const sansFont = Platform.OS === "ios" ? "System" : "sans-serif";
  const openExternal = useCallback((url: string) => {
    void Linking.openURL(url);
  }, []);

  return (
    <View style={styles.container}>
      {/* Main title */}
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
            fontFamily: sansFont,
          },
        ]}
      >
        Beautifully animated heroicons
        <Text style={{ color: colors.primary }}>^</Text>
      </Text>

      {/* Subtitle */}
      <Text
        style={[
          styles.subtitle,
          {
            color: colors.textMuted,
            fontFamily: monoFont,
          },
        ]}
      >
        an open-source (
        <Text
          accessibilityLabel="Open MIT license"
          accessibilityRole="link"
          onPress={() => openExternal(LINK.LICENSE)}
          style={[styles.link, { color: colors.textMuted }]}
        >
          MIT License
        </Text>
        ) collection of smooth animated {ICON_COUNT} icons for your React Native projects. feel free
        to use them!
      </Text>

      {/* Badges */}
      <View style={styles.badgeRow}>
        <Text
          style={[
            styles.badgeText,
            {
              color: colors.textMuted,
              fontFamily: monoFont,
            },
          ]}
        >
          Crafted with{" "}
        </Text>
        <Pressable
          accessibilityLabel="Open Reanimated documentation"
          accessibilityRole="link"
          onPress={() => openExternal(LINK.REANIMATED)}
          style={[styles.badge, { backgroundColor: colors.badgeBg }]}
        >
          <Text style={[styles.badgeLabel, { color: colors.primary }]}>Reanimated</Text>
        </Pressable>
        <Text
          style={[
            styles.badgeText,
            {
              color: colors.textMuted,
              fontFamily: monoFont,
            },
          ]}
        >
          {" "}
          &{" "}
        </Text>
        <Pressable
          accessibilityLabel="Open Heroicons website"
          accessibilityRole="link"
          onPress={() => openExternal(LINK.HEROICONS)}
          style={[styles.badge, { backgroundColor: colors.badgeBg }]}
        >
          <Text style={[styles.badgeLabel, { color: colors.primary }]}>Heroicons</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 0,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 20,
    maxWidth: 582,
  },
  link: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 13,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeLabel: {
    fontSize: 13,
    fontWeight: "500",
  },
});
