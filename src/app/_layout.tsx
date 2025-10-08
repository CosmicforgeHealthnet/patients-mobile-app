import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { useColorScheme } from "../shared/hooks/use-color-scheme.web";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        {/* <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme} // using the DefaultTheme as the dark mode Screens has not be design yet
          // to use the dark theme change the first argument to DarkTheme
        > */}
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          {/* this route should be protected , we can check Stack.Protected to protect it */}
          <Stack.Screen
            name="(dashboard)"
            options={{
              headerShown: false,
              headerTitle: "Dashboard",
              title: "Dashboard",
            }}
          />
          {/* this modal screen has a presentation mode */}
          {/* Modals need to be at the Stack level to use the presentation: "modal" option properly */}
          {/* The drawer navigator doesn't handle modal presentation well, so we keep the modal outside of it */}
          <Stack.Screen
            name="modal"
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack>
        {/* </ThemeProvider> */}
      </SafeAreaProvider>
    </>
  );
}
