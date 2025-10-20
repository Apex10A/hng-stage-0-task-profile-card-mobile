// import { useEffect, useState } from "react";
// import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withRepeat,
//   withTiming,
// } from "react-native-reanimated";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// // import { ThemedText } from "@/components/themed-text";
// // import ParallaxScrollView from "@/components/parallax-scroll-view";
// import { ThemedView } from "@/components/themed-view";
// import { IconSymbol } from "@/components/ui/icon-symbol";
// // import { useThemeColor } from "@/hooks/use-theme-color";

// const SKILL_CLUSTERS = [
//   {
//     title: "Front-End Web",
//     items: ["React", "Next.js", "TypeScript"],
//   },
//   {
//     title: "Frontend Mobile",
//     items: ["React Native", "Expo", "Nativewind"],
//   },
//   {
//     title: "Back-End",
//     items: ["Firebase", "REST APIs", "Node.js"],
//   },
// ];

// //   {
// //     label: "4+ years shipping mobile experiences",
// //   },
// //   {
// //     label: "Design-driven mindset with UX/UI collaboration",
// //   },
// //   {
// //     label: "Mentored junior devs and ran weekly code reviews",
// //   },
// // ];

// const SOCIAL_LINKS = [
//   {
//     label: "Email",
//     value: "pafolabi740@gmail.com",
//     icon: "📧",
//     onPress: () => Linking.openURL("mailto:pafolabi740@gmail.com"),
//   },
//   {
//     label: "GitHub",
//     value: "github.com/Apex10A",
//     icon: "💻",
//     onPress: () => Linking.openURL("https://github.com/Apex10A"),
//   },
//   {
//     label: "X (Twitter)",
//     value: "x.com/devapexxr",
//     icon: "🐦",
//     onPress: () => Linking.openURL("https://x.com/dev_apexxr"),
//   },
// ];

// const TECH_STACK = [
//   { label: "React Native", icon: "react" },
//   { label: "Expo Router", icon: "routes" },
//   { label: "TypeScript", icon: "language-typescript" },
//   { label: "Tailwind CSS", icon: "tailwind" },
//   { label: "Firebase", icon: "firebase" },
//   { label: "Zustand", icon: "cow" },
//   { label: "Figma", icon: "figma" },
// ];

// export default function SkillsAndContactScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }
//     >
//       <ThemedView style={styles.heroCard}>
//         <ThemedText type="subtitle">Frontend Developer</ThemedText>
//         <ThemedText type="title">Praise Afolabi</ThemedText>
//         <ThemedText style={styles.heroParagraph}>
//           I design and build thoughtful mobile experiences that blend polished visuals with measurable
//           impact. Every project is crafted with user empathy, strong collaboration, and a love for clean
//           code.
//         </ThemedText>
      
//       </ThemedView>

//       <View style={styles.sectionHeader}>
//         <ThemedText type="title">Core Skills</ThemedText>
//         <ThemedText type="subtitle" style={styles.sectionSubtitle}>
//           A balance of product thinking, engineering rigor, and delivery excellence.
//         </ThemedText>
//       </View>

//       <View style={styles.skillGrid}>
//         {SKILL_CLUSTERS.map((cluster) => (
//           <ThemedView key={cluster.title} style={styles.skillCard}>
//             <ThemedText type="subtitle">{cluster.title}</ThemedText>
//             <View style={styles.badgeGroup}>
//               {cluster.items.map((item) => (
//                 <View key={item} style={styles.badge}>
//                   <ThemedText style={styles.badgeText}>{item}</ThemedText>
//                 </View>
//               ))}
//             </View>
//           </ThemedView>
//         ))}
//       </View>

//       <TechStackMarquee />


      

//       <ThemedView style={styles.contactCard}>
//         <ThemedText type="title">Let&apos;s Collaborate</ThemedText>
//         <ThemedText style={styles.contactParagraph}>
//           I&apos;m currently open to product collaborations, contract work, or full-time roles focused on
//           creating intuitive mobile applications. Share your idea and let&apos;s bring it to life.
//         </ThemedText>
//         <TouchableOpacity
//           accessibilityRole="button"
//           activeOpacity={0.8}
//           style={styles.primaryButton}
//           onPress={() => Linking.openURL("pafolabi740@gmail.com")}
//         >
//           <ThemedText style={styles.primaryButtonText}>Drop me an email</ThemedText>
//         </TouchableOpacity>

//         <View style={styles.socialLinks}>
//           {SOCIAL_LINKS.map((link) => (
//             <TouchableOpacity
//               key={link.label}
//               style={styles.socialButton}
//               activeOpacity={0.8}
//               onPress={link.onPress}
//             >
//               <ThemedText style={styles.socialLabel}>
//                 {link.icon} {link.label}
//               </ThemedText>
//               <ThemedText type="link" style={styles.socialValue}>
//                 {link.value}
//               </ThemedText>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// function TechStackMarquee() {
//   const translateX = useSharedValue(0);
//   const [contentWidth, setContentWidth] = useState(0);
//   const edgeColor = useThemeColor(
//     { light: "rgba(255, 255, 255, 0.9)", dark: "rgba(5, 5, 5, 0.85)" },
//     "background"
//   );

//   useEffect(() => {
//     if (contentWidth === 0) {
//       return;
//     }

//     translateX.value = 0;
//     translateX.value = withRepeat(
//       withTiming(-contentWidth / 2, {
//         duration: 20000,
//         easing: Easing.linear,
//       }),
//       -1,
//       false
//     );
//   }, [contentWidth, translateX]);

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: translateX.value }],
//   }));

//   return (
//     <ThemedView style={styles.techStackSection}>
//       <ThemedText type="title">Tech Stack</ThemedText>
//       <ThemedText style={styles.sectionSubtitle}>
//         Tools I lean on to ship resilient, user-centered mobile products.
//       </ThemedText>
//       <View style={styles.marqueeOuter}>
//         <View pointerEvents="none" style={[styles.marqueeEdge, styles.marqueeEdgeLeft, { backgroundColor: edgeColor }]} />
//         <View pointerEvents="none" style={[styles.marqueeEdge, styles.marqueeEdgeRight, { backgroundColor: edgeColor }]} />
//         <View style={styles.marqueeMask}>
//           <Animated.View
//             onLayout={(event) => setContentWidth(event.nativeEvent.layout.width)}
//             style={[styles.marqueeTrack, animatedStyle]}
//           >
//             {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
//               <View key={`${tech.label}-${index}`} style={styles.techChip}>
//                 <MaterialCommunityIcons
//                   name={tech.icon as React.ComponentProps<typeof MaterialCommunityIcons>["name"]}
//                   size={20}
//                   color="#0a7ea4"
//                   style={styles.techChipIcon}
//                 />
//                 <ThemedText style={styles.techChipText}>{tech.label}</ThemedText>
//               </View>
//             ))}
//           </Animated.View>
//         </View>
//       </View>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: "#808080",
//     bottom: -90,
//     left: -35,
//     position: "absolute",
//   },
//   heroCard: {
//     gap: 12,
//     padding: 24,
//     borderRadius: 24,
//     backgroundColor: "rgba(12, 12, 12, 0.05)",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.08,
//     shadowRadius: 20,
//     elevation: 6,
//   },
//   heroParagraph: {
//     lineHeight: 26,
//     fontSize: 16,
//   },
//   highlightRow: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//   },
//   highlightPill: {
//     borderRadius: 999,
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     backgroundColor: "rgba(10, 126, 164, 0.12)",
//   },
//   highlightText: {
//     fontSize: 14,
//     fontWeight: "600",
//   },
//   sectionHeader: {
//     gap: 6,
//     marginTop: 32,
//   },
//   sectionSubtitle: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: "#5C6C76",
//   },
//   skillGrid: {
//     gap: 16,
//   },
//   skillCard: {
//     gap: 12,
//     padding: 20,
//     borderRadius: 20,
//     backgroundColor: "rgba(12, 12, 12, 0.05)",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.06,
//     shadowRadius: 12,
//     elevation: 4,
//   },
//   badgeGroup: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//   },
//   badge: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 14,
//     backgroundColor: "rgba(0, 0, 0, 0.08)",
//   },
//   badgeText: {
//     fontSize: 14,
//     fontWeight: "600",
//   },
//   techStackSection: {
//     gap: 10,
//     marginTop: 36,
//     paddingVertical: 8,
//   },
//   marqueeOuter: {
//     marginTop: 8,
//     position: "relative",
//   },
//   marqueeMask: {
//     overflow: "hidden",
//     borderRadius: 22,
//     backgroundColor: "rgba(12, 12, 12, 0.05)",
//     paddingVertical: 16,
//   },
//   marqueeTrack: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//     paddingHorizontal: 12,
//   },
//   techChip: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 18,
//     backgroundColor: "rgba(10, 126, 164, 0.12)",
//   },
//   techChipIcon: {
//     marginRight: 8,
//   },
//   techChipText: {
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   marqueeEdge: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     width: 48,
//     zIndex: 2,
//     opacity: 0.85,
//   },
//   marqueeEdgeLeft: {
//     left: 0,
//   },
//   marqueeEdgeRight: {
//     right: 0,
//   },
//   projectCard: {
//     gap: 10,
//     padding: 22,
//     borderRadius: 22,
//     backgroundColor: "rgba(12, 12, 12, 0.05)",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.06,
//     shadowRadius: 14,
//     elevation: 5,
//   },
//   projectDescription: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   projectStack: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#0a7ea4",
//   },
//   contactCard: {
//     marginTop: 40,
//     gap: 18,
//     padding: 24,
//     borderRadius: 24,
//     backgroundColor: "rgba(10, 126, 164, 0.12)",
//   },
//   contactParagraph: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   primaryButton: {
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 16,
//     paddingVertical: 14,
//     backgroundColor: "#0a7ea4",
//   },
//   primaryButtonText: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#FFFFFF",
//   },
//   socialLinks: {
//     gap: 16,
//   },
//   socialButton: {
//     gap: 6,
//     padding: 16,
//     borderRadius: 18,
//     backgroundColor: "rgba(255, 255, 255, 0.32)",
//   },
//   socialLabel: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   socialValue: {
//     fontSize: 16,
//   },
// });
