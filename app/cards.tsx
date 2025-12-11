import CardItem from "@/components/CardBalance";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const cards = () => {
  return (
    <ScrollView style={styles.safe} contentContainerStyle={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>My Cards</Text>

        {/* Example Card */}
        <CardItem />
        <CardItem />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0d172a" },
  container: { padding: 20 },
  title: { color: "white", fontSize: 22, fontWeight: 700, marginBottom: 12 },
});

export default cards;
