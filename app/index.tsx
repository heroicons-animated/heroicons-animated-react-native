import { useMemo, useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ALL_ICONS, type IconMeta } from "../constants/icons";
import { Colors } from "../constants/theme";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { CliBlock } from "../components/CliBlock";
import { CommentBlock } from "../components/CommentBlock";
import { IconCard } from "../components/IconCard";
import { SearchBar } from "../components/SearchBar";

const ICON_COUNT = ALL_ICONS.length;
const CARD_MIN_WIDTH = 200;
const CARD_GAP = 8;

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const [searchQuery, setSearchQuery] = useState("");
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const contentWidth = width - 32; // 16px padding each side
  const numColumns = Math.max(
    2,
    Math.floor((contentWidth + CARD_GAP) / (CARD_MIN_WIDTH + CARD_GAP)),
  );

  const filteredIcons = useMemo(() => {
    if (!searchQuery.trim()) return ALL_ICONS;
    const query = searchQuery.toLowerCase().trim();
    return ALL_ICONS.filter(
      (icon) =>
        icon.name.includes(query) ||
        icon.displayName.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const renderItem = ({ item }: { item: IconMeta }) => (
    <IconCard icon={item} />
  );

  const ListHeader = useMemo(
    () => (
      <View style={styles.listHeader}>
        <HeroSection />
        <View style={styles.cliWrapper}>
          <CliBlock />
        </View>
        <CommentBlock />
        <View style={styles.searchWrapper}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            resultCount={filteredIcons.length}
            totalCount={ICON_COUNT}
          />
        </View>
      </View>
    ),
    [searchQuery, filteredIcons.length, colors],
  );

  const ListEmpty = useMemo(
    () => (
      <View style={styles.emptyState}>
        <Text
          style={[
            styles.emptyText,
            {
              color: "#737373",
              fontFamily:
                Platform.OS === "ios" ? "Menlo" : "monospace",
            },
          ]}
        >
          No icons found
        </Text>
      </View>
    ),
    [colors],
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          paddingTop: insets.top,
        },
      ]}
    >
      <Header />
      <FlatList
        key={`grid-${numColumns}`}
        data={filteredIcons}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={[
          styles.grid,
          { paddingBottom: 60 + insets.bottom },
        ]}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        maxToRenderPerBatch={16}
        windowSize={5}
        removeClippedSubviews={Platform.OS !== "web"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    alignItems: "center",
    marginBottom: 0,
  },
  cliWrapper: {
    width: "100%",
    alignItems: "center",
  },
  searchWrapper: {
    width: "100%",
  },
  grid: {
    paddingHorizontal: 16,
    gap: 8,
  },
  row: {
    gap: 8,
  },
  emptyState: {
    paddingVertical: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
  },
});
