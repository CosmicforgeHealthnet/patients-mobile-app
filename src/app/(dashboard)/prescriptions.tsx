import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// Dummy drawer screen
export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>This is the Prescription Drawer screen</Text>
      <Link href="\" style={styles.link}>
        <Text>Log out</Text>
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
