import { ScrollView, View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { PraiseHeading } from "@/components/";
import { PraiseText } from "@/components/";
import { PraiseButton } from "@/components/";
import useTheme from "@/components/useTheme";
import { useTokens } from "@/constants/theme";

export default function HomeScreen() {
  const $ = useTokens();
  const { colors } = useTheme();

  const my_stats = [
    {label: "Projects", value: "15+" },
    {label: "Experience", value: "2+ yrs" },
    {label: "Tech Stack", value: "10+" },
  ];

  return (
    <ScrollView style={[$.flex1, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <View style={[$.p4, $.gap4, { paddingTop: 60 }]}>
        <View style={$.gap2}>
          <PraiseHeading style={[$.fontSemibold, { fontSize: 36, lineHeight: 44, color: colors.text }]}>
            Hi, I&apos;m Praise 👋
          </PraiseHeading>
          <PraiseText 
            style={{ 
              fontSize: 16, 
              color: colors.textMuted,
              lineHeight: 24 
            }}
          >
            Frontend web, Mobile, Backend Developer
          </PraiseText>
        </View>
        <View 
         
        >
          <PraiseText style={{ fontSize: 14, lineHeight: 22, color: colors.text }}>
            I turn ideas into reality with code. 
          </PraiseText>
          <View style={[$.gap3, $.mt2]}>
            <TouchableOpacity
              style={[
                styles.githubButton,
                { backgroundColor: colors.primary }
              ]}
              onPress={() => Linking.openURL("https://github.com")}
              activeOpacity={0.8}
            >
              <PraiseText 
                style={{ 
                  color: colors.background,
                  fontWeight: "600",
                  fontSize: 16,
                  textAlign: "center"
                }}
              >
                Check my GitHub
              </PraiseText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.statsRow, $.gap2]}>
          {my_stats.map((stat, idx) => (
            <View
              key={idx}
              style={[
                styles.statCard,
                { backgroundColor: colors.surface, flex: 1 }
              ]}
            >
              <PraiseHeading style={{ fontSize: 20, color: colors.textMuted }}>{stat.value}</PraiseHeading>
              <PraiseText style={{ fontSize: 12, color: colors.textMuted }}>
                {stat.label}
              </PraiseText>
            </View>
          ))}
        </View>
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    marginVertical: 8,
  },
  statCard: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  githubButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  viewAllButton: {
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    marginTop: 4,
  },
});
