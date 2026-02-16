import { useCallback } from "react";
import { Linking, Platform, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { LINK } from "../constants/site";
import { Colors } from "../constants/theme";

function ArrowTopRightIcon({ color, size = 14 }: { color: string; size?: number }) {
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
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CommentBlock() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const sansFont = Platform.OS === "ios" ? "System" : "sans-serif";
  const openExternal = useCallback((url: string) => {
    void Linking.openURL(url);
  }, []);

  return (
    <View style={styles.container}>
      {/* Left accent bar */}
      <View style={[styles.accentBar, { backgroundColor: "rgba(163,163,163,0.5)" }]} />

      <View style={styles.content}>
        {/* Quote */}
        <Text
          style={[
            styles.quote,
            {
              color: colorScheme === "dark" ? "#e5e5e5" : "#404040",
              fontFamily: sansFont,
            },
          ]}
        >
          {"\u201C"}these icons were heavily inspired from the work of{" "}
          <Text
            accessibilityLabel="Open lucide-animated website"
            accessibilityRole="link"
            onPress={() => openExternal(LINK.LUCIDE_ANIMATED)}
            style={styles.quoteLink}
          >
            lucide-animated by dmytro
          </Text>{" "}
          and what i learned from the{" "}
          <Text
            accessibilityLabel="Open animations.dev website"
            accessibilityRole="link"
            onPress={() => openExternal(LINK.ANIMATIONS_DEV)}
            style={styles.quoteLink}
          >
            animations.dev
          </Text>{" "}
          course.{"\u201D"}
        </Text>

        {/* Author row */}
        <View style={[styles.authorRow, { borderTopColor: colors.border }]}>
          <View style={styles.authorInfo}>
            {/* Avatar placeholder */}
            <View
              style={[
                styles.avatar,
                {
                  backgroundColor: colorScheme === "dark" ? "#262626" : "#e5e5e5",
                },
              ]}
            >
              <Text style={[styles.avatarText, { fontFamily: sansFont }]}>AP</Text>
            </View>
            <Text
              style={[
                styles.authorText,
                {
                  color: colorScheme === "dark" ? "#a3a3a3" : "#525252",
                },
              ]}
            >
              <Text
                accessibilityLabel="Open aniketpawar.com"
                accessibilityRole="link"
                onPress={() => openExternal(LINK.ANIKET)}
                style={styles.authorLink}
              >
                aniket
              </Text>
              , creator of heroicons-animated
            </Text>
          </View>

          {/* Take the course button */}
          <Pressable
            accessibilityHint="Opens animations.dev"
            accessibilityLabel="Take the course"
            accessibilityRole="button"
            onPress={() => openExternal(LINK.ANIMATIONS_DEV)}
            style={({ pressed }) => [
              styles.courseButton,
              {
                backgroundColor: pressed ? "#7c3aed" : colors.primary,
              },
            ]}
          >
            <Text style={[styles.courseButtonText, { fontFamily: sansFont }]}>Take the course</Text>
            <ArrowTopRightIcon color="#ffffff" size={14} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 40,
    width: "100%",
    maxWidth: 610,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  accentBar: {
    width: 4,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingLeft: 16,
  },
  quote: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.14,
  },
  quoteLink: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  authorRow: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#737373",
  },
  authorText: {
    fontSize: 13,
    letterSpacing: 0.13,
  },
  authorLink: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  courseButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  courseButtonText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "500",
  },
});
