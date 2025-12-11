import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProfileItemProps {
  icon: string;
  label: string;
}

const ProfileMenuItem = ({ icon, label }: ProfileItemProps) => {
  return (
    <View style={styles.row}>
      <Ionicons name={icon} size={22} color="#38bdf8" />
      <Text style={styles.label}>{label}</Text>
      <Ionicons name={"chevron-forward"} size={22} color="#94a3b8" />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#1e293b",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  label: { flex: 1, marginLeft: 12, color: "white", fontSize: 16 },
});

export default ProfileMenuItem;
