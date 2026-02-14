/**
 * Maps icon names to their React Native components.
 * We import a representative subset and use lazy require for the rest.
 */
import React from "react";
import type { IconHandle, IconProps } from "@heroicons-animated/react-native";
import * as AllIcons from "@heroicons-animated/react-native";

type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<IconHandle>
>;

// Build a map from component names to components
const iconMap: Record<string, IconComponent> = {};

for (const [key, value] of Object.entries(AllIcons)) {
  if (key.endsWith("Icon") && typeof value === "object" && value !== null) {
    iconMap[key] = value as unknown as IconComponent;
  }
}

export function getIconComponent(componentName: string): IconComponent | null {
  return iconMap[componentName] || null;
}

export function getIconByName(kebabName: string): IconComponent | null {
  const pascalName =
    kebabName
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") + "Icon";
  return getIconComponent(pascalName);
}
