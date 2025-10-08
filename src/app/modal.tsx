import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// dummy modal screen
export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text>Are you sure you want to log out?</Text>
      <Link replace href="/" dismissTo style={styles.link}>
        <Text>Go to home screen</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
