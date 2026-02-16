import { Platform, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../constants/theme";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  resultCount: number;
  totalCount: number;
}

function MagnifyingGlassIcon({ color, size = 20 }: { color: string; size?: number }) {
  return (
    <Svg fill="none" height={size} stroke={color} strokeWidth={2} viewBox="0 0 24 24" width={size}>
      <Path
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SearchBar({ value, onChangeText, resultCount, totalCount }: SearchBarProps) {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const isFiltering = value.trim().length > 0;
  const monoFont = Platform.OS === "ios" ? "Menlo" : "monospace";

  return (
    <View
      style={[
        styles.wrapper,
        {
          borderTopColor: colors.border,
          borderBottomColor: colors.border,
          backgroundColor: colorScheme === "dark" ? "rgba(23,23,23,0.8)" : "rgba(245,245,245,0.8)",
        },
      ]}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: colorScheme === "dark" ? "#0a0a0a" : "#ffffff",
          },
        ]}
      >
        <View style={styles.iconWrapper}>
          <MagnifyingGlassIcon color="#a3a3a3" size={20} />
        </View>
        <TextInput
          accessibilityHint="Type to filter the icon list"
          accessibilityLabel="Search icons"
          accessibilityRole="search"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          onChangeText={onChangeText}
          placeholder="Search icons..."
          placeholderTextColor="#a3a3a3"
          returnKeyType="search"
          style={[
            styles.input,
            {
              color: colors.text,
              fontFamily: monoFont,
            },
          ]}
          value={value}
        />
        <Text
          style={[
            styles.count,
            {
              color: "#a3a3a3",
              fontFamily: monoFont,
            },
          ]}
        >
          {isFiltering ? `${resultCount}/` : ""}
          {totalCount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 40,
  },
  iconWrapper: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    height: 40,
    letterSpacing: -0.3,
    padding: 0,
  },
  count: {
    fontSize: 14,
    marginLeft: 8,
  },
});
