import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet, Platform } from "react-native";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

const ACCENT_COLOR = "#F97316";
const INACTIVE_COLOR = "rgba(52, 64, 84, 0.65)";
const TAB_BACKGROUND = "rgba(255, 255, 255, 0.72)";
const TAB_BORDER = "rgba(15, 23, 42, 0.12)";
const ICON_IDLE_BACKGROUND = "rgba(15, 23, 42, 0.06)";

const TAB_ICON_MAP: Record<string, keyof typeof MaterialCommunityIcons.glyphMap> = {
  index: "home-variant-outline",
  about: "account-tie-outline",
  explore: "compass-rose",
};

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <ThemeProvider value={DefaultTheme}>
      <Tabs
        screenOptions={({ route }) => {
          const iconName = TAB_ICON_MAP[route.name] ?? "circle-outline";

          return {
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "#0F172A",
            tabBarInactiveTintColor: INACTIVE_COLOR,
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
              fontFamily: "ClashGrotesk-Medium",
              fontSize: 12,
              marginBottom: Platform.OS === "ios" ? -2 : 4,
            },
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.iconWrapper,
                  focused && {
                    backgroundColor: ACCENT_COLOR,
                    borderColor: ACCENT_COLOR,
                    shadowColor: ACCENT_COLOR,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name={iconName}
                  size={22}
                  color={focused ? "#FFFFFF" : color}
                />
              </View>
            ),
            tabBarItemStyle: styles.tabBarItem,
            tabBarStyle: [
              styles.tabBar,
              {
                paddingBottom: Math.max(insets.bottom / 2, 12),
                backgroundColor: TAB_BACKGROUND,
                borderColor: TAB_BORDER,
              },
            ],
            tabBarBackground: () => (
              <BlurView
                intensity={35}
                tint="light"
                style={StyleSheet.absoluteFill}
              />
            ),
          };
        }}
      >
     
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "More",
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 0,
    height: 84,
    borderRadius: 28,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 20,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  tabBarItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: ICON_IDLE_BACKGROUND,
    borderColor: "transparent",
  },
});
