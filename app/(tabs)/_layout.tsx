import React, { useState } from "react";
import { Tabs } from "expo-router";
import { View, Text, Switch, StyleSheet, Platform } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

export default function Layout() {
  const [isDark, setIsDark] = useState(false);
  const insets = useSafeAreaInsets();
  const theme = isDark ? DarkTheme : DefaultTheme;
  const accentColor = theme.colors.primary;
  const inactiveColor = isDark ? "rgba(255, 255, 255, 0.65)" : "rgba(52, 64, 84, 0.65)";
  const surfaceColor = isDark ? "rgba(17, 20, 31, 0.65)" : "rgba(255, 255, 255, 0.65)";
  const borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(15, 23, 42, 0.12)";
  const iconIdleBackground = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(15, 23, 42, 0.06)";

  return (
    <ThemeProvider value={theme}>
      {/* <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</Text>
        <Switch
          value={isDark}
          onValueChange={() => setIsDark(!isDark)}
          thumbColor={isDark ? accentColor : "#f4f3f4"}
          trackColor={{ false: "#767577", true: accentColor }}
        />
      </View> */}

      <Tabs
        screenOptions={({ route }) => {
          const iconMap: Record<string, keyof typeof MaterialCommunityIcons.glyphMap> = {
            index: "account-heart-outline",
            explore: "compass-rose",
          };

          return {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: accentColor,
            tabBarInactiveTintColor: inactiveColor,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.iconWrapper,
                  focused
                    ? styles.iconWrapperFocused
                    : {
                       
                      },
                ]}
              >
                <MaterialCommunityIcons
                  name={iconMap[route.name] ?? "circle-outline"}
                  size={22}
                  color={focused ? "#ffffff" : color}
                />
              </View>
            ),
            tabBarItemStyle: styles.tabBarItem,
            tabBarStyle: [
              styles.tabBar,
              {
                backgroundColor: isDark ? "rgba(22, 23, 28, 0.45)" : "rgba(255, 255, 255, 0.55)",
                borderColor: isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(16, 24, 40, 0.12)",
                // marginBottom: Math.max(insets.bottom, 16),
              },
            ],
            tabBarLabelStyle: {
              fontFamily: "ClashGrotesk-Medium",
            },
            tabBarBackground: () => (
              <BlurView
                intensity={isDark ? 25 : 50}
                tint={isDark ? "dark" : "light"}
                style={StyleSheet.absoluteFill}
              />
            ),
          };
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "About Me",
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Skills & Contact",
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabBar: {
    position: "absolute",
    // left: 16,
    // right: 16,
    bottom: 0,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 1,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 16,
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
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  iconWrapperFocused: {
    backgroundColor: "#F97415",
    borderColor: "#F97415",
    ...Platform.select({
      ios: {
        shadowColor: "#F97415",
        shadowOpacity: 0.32,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 14,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});