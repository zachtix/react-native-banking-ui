import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CardBalance = () => {
  return (
    <LinearGradient colors={["#0ea5a4", "#06b6d4"]} style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.cardTitle}>My Wallet</Text>
        <MaterialIcons name="account-balance-wallet" size={22} color="white" />
      </View>

      <Text style={styles.balanceLabel}>Balance</Text>
      <Text style={styles.balanceValue}>$ 12,450.00</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Recevive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Top up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 8,
    marginBottom: 18,
    // shadowColor: "#000",
    // shadowOpacity: 0.15,
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowRadius: 12,
    // elevation: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
  },
  balanceLabel: {
    color: "white",
    marginTop: 18,
    fontSize: 12,
  },
  balanceValue: {
    color: "white",
    fontSize: 28,
    fontWeight: 700,
    marginTop: 6,
  },
  actions: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 12,
    // borderWidth: 1,
    // borderColor: "white",
  },
  actionText: { color: "white", fontWeight: 600 },
});

export default CardBalance;
