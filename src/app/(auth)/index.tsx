import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
        <Link href={"/register"}>
          <Text>Register</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
