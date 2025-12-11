import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardItemProps {
  name: string;
  icon: string;
  cardNumber: string;
  balance: number;
  colors: string[];
}

const CardItem = ({
  name,
  icon,
  cardNumber,
  balance,
  colors,
}: CardItemProps) => {
  return (
    // <SafeAreaView>
    //   <ScrollView style={styles.safe} contentContainerStyle={styles.container}>
    //     <Text style={styles.title}>My Cards</Text>
    //   </ScrollView>
    // </SafeAreaView>
    <LinearGradient colors={colors} style={styles.card}>
      <FontAwesome name={icon} size={22} color="white" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>**** **** **** {cardNumber.slice(-4)}</Text>

      <View style={styles.bottom}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.balance}>
          {balance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  // safe: { flex: 1, backgroundColor: "#0d172a" },
  // container: { padding: 20 },
  // title: { color: "white", fontSize: 22, fontWeight: 700, marginBottom: 12 },

  card: { padding: 20, borderRadius: 10, marginBottom: 14 },
  name: { color: "white", fontSize: 22, fontWeight: 700 },
  number: { color: "#e2e8f0", marginTop: 14, fontSize: 17, letterSpacing: 3 },
  bottom: { marginTop: 24 },
  label: { color: "#cbd5e1", fontSize: 12 },
  balance: { color: "white", fontSize: 28, fontWeight: 700, marginTop: 4 },
});

export default CardItem;
