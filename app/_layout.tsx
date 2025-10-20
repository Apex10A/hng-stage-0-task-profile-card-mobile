import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import 'react-native-reanimated';

void SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'ClashGrotesk-Regular': require('./(tabs)/fonts/ClashGrotesk-Variable.ttf'),
    'ClashGrotesk-Medium': require('./(tabs)/fonts/ClashGrotesk-Variable.ttf'),
    'ClashGrotesk-Semibold': require('./(tabs)/fonts/ClashGrotesk-Variable.ttf'),
    'ClashGrotesk-Bold': require('./(tabs)/fonts/ClashGrotesk-Variable.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="dark" backgroundColor="#F8FAFC" />
    </ThemeProvider>
  );
}
