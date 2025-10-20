import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { useTokens } from "@/constants/theme";
import {PraiseHeading} from "@/components/";
import { PraiseText } from "@/components/";
import { PraiseButton } from "@/components/";


export default function AboutScreen() {
   const $ = useTokens();
  return (

      <View style={[$.flex1, $.p4, $.justifyCenter, $.gap4, {backgroundColor: '#F9FAFB'}]}>
        <PraiseHeading>Hi, I&apos;m Praise 👋</PraiseHeading>
        <PraiseText>Frontend web, Mobile, Backend development</PraiseText>
        <PraiseButton>Hire me</PraiseButton>
  
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hi, I’m Praise Afolabi 👋</ThemedText>
      </ThemedView>

      <ThemedView style={styles.textContainer}>
        <ThemedText type="default">
         I’m a Product Developer passionate about building modern, scalable, and user-friendly web applications. I do beyond transforming designs into clean, functional code and I focus on solving real business problems and driving innovation. I don’t just code interfaces, I build experiences that create impact and help products grow.
        </ThemedText>
      </ThemedView> */}

      </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});
