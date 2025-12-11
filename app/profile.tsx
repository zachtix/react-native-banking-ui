import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Atthauwt</Text>
      <Text style={styles.email}>atthawut.smith@gmail.com</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d172a",
    alignItems: "center",
    paddingTop: 80,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { color: "white", fontSize: 22, fontWeight: 700 },
  email: { color: "#94a3b8", marginTop: 6 },
});

export default profile;
