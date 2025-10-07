import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

// the index file in the (dashboard) folder
export default function Dashboard() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>This is the index (The Dashboard)</ThemedText>
      <Link href="/modal" style={styles.link}>
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
