import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TransactionItem = ({ item }) => {
  const _signalColor = item.type === "income" ? "#10b981" : "#ef4444";
  return (
    <View style={styles.wrap}>
      <View style={styles.left}>
        <View
          style={[styles.iconBox, { backgroundColor: item.bg || "#0ea5a4" }]}
        >
          <Ionicons
            name={item.icon || "card-outline"}
            size={20}
            color="white"
          />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.sub}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={[styles.amount, { color: _signalColor }]}>
          {item.amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(148,163,184,0.08)",
  },
  left: { flexDirection: "row", alignItems: "center" },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  title: { color: "#fff", fontSize: 14, fontWeight: "600" },
  sub: { color: "#94a3b8", fontSize: 12, marginTop: 2 },
  right: { alignItems: "flex-end" },
  amount: { fontWeight: "700", fontSize: 14 },
});

export default TransactionItem;
