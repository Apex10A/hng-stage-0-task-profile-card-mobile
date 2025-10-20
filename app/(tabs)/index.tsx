import { Image } from "expo-image";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { useTokens } from "@/constants/theme";
import {PraiseHeading} from "@/components/";
import { PraiseText } from "@/components/";
import { PraiseButton } from "@/components/";
import { useState } from "react";


export default function AboutScreen() {
  const [inputValue, setInputValue] = useState("");
   const $ = useTokens();
  return (

      <View style={[$.flex1, $.p4, $.justifyCenter, $.gap4, {backgroundColor: '#F9FAFB'}]}>
         <TextInput
        placeholder="dummy search..."
        value={inputValue}
        onChangeText={setInputValue}
        // style={styles.input}
        style={{
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 20,
          borderWidth: 1,
          position: "absolute",
          top: 10,
          width: "100%",
          borderColor: "#ccc",
        }}
        placeholderTextColor="#9CA3AF"
      />
        <PraiseHeading>Hi, I&apos;m Praise 👋</PraiseHeading>
        <PraiseText style={{maxWidth: 200}}>Frontend web, Mobile, Backend development</PraiseText>
        <PraiseButton variant="danger" size="lg" fullWidth style={{backgroundColor: '#54a0ebff'}}>Hire me</PraiseButton>
  
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
