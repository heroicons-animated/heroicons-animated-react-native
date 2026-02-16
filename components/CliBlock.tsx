import * as Clipboard from "expo-clipboard";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { getInstallCommand, PACKAGE_MANAGERS, type PackageManager } from "../constants/site";
import { Colors } from "../constants/theme";

function ClipboardIcon({ color, size = 16 }: { color: string; size?: number }) {
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
        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CheckIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg fill="none" height={size} stroke={color} strokeWidth={2} viewBox="0 0 24 24" width={size}>
      <Path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function CliBlock() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const [selectedPM, setSelectedPM] = useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const monoFont = Platform.OS === "ios" ? "Menlo" : "monospace";

  const command = getInstallCommand(selectedPM);

  const handleCopy = useCallback(async () => {
    await Clipboard.setStringAsync(command);
    setCopied(true);
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }, [command]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Package manager tabs - filled style matching original */}
      <View style={styles.tabRow}>
        {PACKAGE_MANAGERS.map((pm, index) => {
          const isSelected = selectedPM === pm;
          const isFirst = index === 0;
          const isLast = index === PACKAGE_MANAGERS.length - 1;

          return (
            <Pressable
              accessibilityLabel={`Use ${pm} install command`}
              accessibilityRole="tab"
              accessibilityState={{ selected: isSelected }}
              key={pm}
              onPress={() => setSelectedPM(pm)}
              style={[
                styles.tab,
                {
                  backgroundColor: isSelected
                    ? colors.primary
                    : colorScheme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "#ffffff",
                  borderTopLeftRadius: isFirst ? 8 : 0,
                  borderTopRightRadius: isLast ? 8 : 0,
                },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isSelected ? "#ffffff" : colorScheme === "dark" ? "#ffffff" : "#000000",
                    fontFamily: monoFont,
                  },
                ]}
              >
                {pm}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Command display */}
      <View
        style={[
          styles.commandRow,
          {
            backgroundColor: colorScheme === "dark" ? "rgba(255,255,255,0.1)" : "#ffffff",
          },
        ]}
      >
        <ScrollView
          contentContainerStyle={styles.commandScroll}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Text style={[styles.commandText, { fontFamily: monoFont }]}>
            <Text
              style={{
                color: colorScheme === "dark" ? "#a3a3a3" : "#525252",
              }}
            >
              {selectedPM === "npm"
                ? "npm"
                : selectedPM === "yarn"
                  ? "yarn"
                  : selectedPM === "bun"
                    ? "bun"
                    : "pnpm"}
            </Text>
            <Text
              style={{
                color: colorScheme === "dark" ? "#ffffff" : "#000000",
              }}
            >
              {selectedPM === "npm" ? " install " : " add "}
            </Text>
            <Text style={{ color: colors.primary }}>@heroicons-animated/react-native</Text>
          </Text>
        </ScrollView>

        {/* Copy button */}
        <Pressable
          accessibilityHint="Copies the selected package manager command"
          accessibilityLabel="Copy install command"
          accessibilityRole="button"
          onPress={handleCopy}
          style={({ pressed }) => [
            styles.copyButton,
            {
              backgroundColor: pressed
                ? colorScheme === "dark"
                  ? "rgba(255,255,255,0.15)"
                  : "#f5f5f5"
                : "transparent",
            },
          ]}
        >
          {copied ? (
            <CheckIcon color="#22c55e" size={16} />
          ) : (
            <ClipboardIcon color={colorScheme === "dark" ? "#ffffff" : "#000000"} size={16} />
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    maxWidth: 642,
    paddingHorizontal: 16,
  },
  tabRow: {
    flexDirection: "row",
    gap: 1,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  tabText: {
    fontSize: 14,
    letterSpacing: -0.39,
  },
  commandRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
    marginTop: 1,
  },
  commandScroll: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingRight: 80,
  },
  commandText: {
    fontSize: 14,
    letterSpacing: -0.39,
  },
  copyButton: {
    position: "absolute",
    right: 6,
    padding: 8,
    borderRadius: 6,
  },
});
