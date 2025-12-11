import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CardItem = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.safe} contentContainerStyle={styles.container}>
        <Text style={styles.title}>My Cards</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0d172a" },
  container: { padding: 20 },
  title: { color: "white", fontSize: 22, fontWeight: 700, marginBottom: 12 },
});

export default CardItem;
