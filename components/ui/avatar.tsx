import type { ReactNode } from "react";
import { Image, type ImageSourcePropType, StyleSheet, Text, View } from "react-native";

interface AvatarProps {
  children?: ReactNode;
  size?: number;
}

interface AvatarImageProps {
  source: ImageSourcePropType;
  alt?: string;
}

interface AvatarFallbackProps {
  children: ReactNode;
}

function Avatar({ children, size = 28 }: AvatarProps) {
  return (
    <View
      style={[
        styles.root,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      {children}
    </View>
  );
}

function AvatarImage({ source, alt }: AvatarImageProps) {
  return <Image accessibilityLabel={alt} source={source} style={styles.image} />;
}

function AvatarFallback({ children }: AvatarFallbackProps) {
  return (
    <View style={styles.fallback}>
      <Text style={styles.fallbackText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  fallback: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#737373",
  },
});

export { Avatar, AvatarFallback, AvatarImage };
