import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const stats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      <Text style={styles.text}>stats</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#0d172a", flex: 1, padding: 20 },
  title: { color: "white", fontSize: 24, fontWeight: 700 },
  text: { color: "#94a3b8", marginTop: 12 },
});

export default stats;
