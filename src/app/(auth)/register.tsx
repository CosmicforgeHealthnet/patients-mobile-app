import { ThemedText } from "@/src/shared/components/themed-text";
import { ThemedView } from "@/src/shared/components/themed-view";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// dummy registration screen
export default function Login() {
  return (
    <SafeAreaView>
      <ThemedView style={{ display: "flex", alignItems: "center" }}>
        <ThemedText>Register Screen Screen</ThemedText>
        <Link replace href={"/(dashboard)/(tabs)"}>
          <ThemedText>Login</ThemedText>
        </Link>
      </ThemedView>
    </SafeAreaView>
  );
}
