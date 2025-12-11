import CardItem from "@/components/CardItem";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const cards = () => {
  return (
    <ScrollView style={styles.safe} contentContainerStyle={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>My Cards</Text>

        {/* Example Card */}
        <CardItem
          name="Visa Platinum"
          icon="cc-visa"
          cardNumber="1234"
          balance={24500}
          colors={["#0ea5e9", "#0369a1"]}
        />
        <CardItem
          name="Master Card"
          icon="cc-mastercard"
          cardNumber="1234"
          balance={24500}
          colors={["#d72d2dff", "#e90e0eff"]}
        />
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
