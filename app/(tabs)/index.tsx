import { View, StyleSheet, Text, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.titleContainer}>
      <Text style={styles.text}>Hello word</Text>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
