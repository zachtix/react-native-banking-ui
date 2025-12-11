import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StatCategoryItemProps {
  label: string;
  value: string;
  color: string;
}

const StatCategoryItem = ({ label, value, color }: StatCategoryItemProps) => {
  return (
    <View style={styles.row}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  dot: { width: 14, height: 14, borderRadius: 7, marginRight: 12 },
  label: { color: "#e2e8f0", flex: 1, fontSize: 16 },
  value: { color: "white", fontSize: 16, fontWeight: 700 },
});

export default StatCategoryItem;
