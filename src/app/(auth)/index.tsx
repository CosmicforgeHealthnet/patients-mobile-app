import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>Login Screen</ThemedText>
        <Link href={"/register"}>
          <ThemedText>Register</ThemedText>
        </Link>
      </ThemedView>
    </SafeAreaView>
  );
}
