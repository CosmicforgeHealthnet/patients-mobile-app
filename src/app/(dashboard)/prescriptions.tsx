import { ThemedText } from "@/src/shared/components/themed-text";
import { ThemedView } from "@/src/shared/components/themed-view";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

// Dummy drawer screen
export default function Dashboard() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>This is the Prescription Drawer screen</ThemedText>
      <Link href="\" style={styles.link}>
        <ThemedText>Log out</ThemedText>
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
