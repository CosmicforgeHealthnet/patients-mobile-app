import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { ThemedText } from "../shared/components/themed-text";
import { ThemedView } from "../shared/components/themed-view";

// dummy modal screen
export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Are you sure you want to log out?</ThemedText>
      <Link replace href="/" dismissTo style={styles.link}>
        <ThemedText>Go to home screen</ThemedText>
      </Link>
    </ThemedView>
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
