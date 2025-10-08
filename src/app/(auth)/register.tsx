import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// dummy registration screen
export default function Login() {
  return (
    <SafeAreaView>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text>Register Screen Screen</Text>
        <Link replace href={"/(dashboard)/(tabs)"}>
          <Text>Login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
