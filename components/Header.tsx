import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Good evening</Text>
        <Text style={styles.name}>Atthawut</Text>
      </View>
      <TouchableOpacity style={styles.avatarWrap}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={styles.avatar}
        />
        <View style={styles.badge}>
          <MaterialIcons name="notifications" size={12} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  greeting: { color: "#94a3b8", fontSize: 12 },
  name: { color: "white", fontSize: 18, fontWeight: 700 },
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    position: "relative",
    marginRight: 10,
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  badge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "#ef4444",
    padding: 4,
    borderRadius: 10,
  },
});

export default Header;
