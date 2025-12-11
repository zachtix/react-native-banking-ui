import ProfileMenuItem from "@/components/ProfileMenuItem";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Image
    //     source={{
    //       uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    //     }}
    //     style={styles.avatar}
    //   />
    //   <Text style={styles.name}>Atthauwt</Text>
    //   <Text style={styles.email}>atthawut.smith@gmail.com</Text>
    // </SafeAreaView>
    <ScrollView style={styles.safe} contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Atthawut</Text>
          <Text style={styles.email}>atthawut.smith@gmail.com</Text>

          <Text style={styles.section}>Account</Text>
          <ProfileMenuItem icon="person-outline" label="Personal Info" />
          <ProfileMenuItem icon="wallet-outline" label="Payment Methods" />
          <ProfileMenuItem icon="lock-closed-outline" label="Change Password" />
          <ProfileMenuItem icon="notifications-outline" label="Notifications" />

          <Text style={styles.section}>Support</Text>
          <ProfileMenuItem icon="help-circle-outline" label="Help Center" />
          <ProfileMenuItem icon="chatbox-outline" label="Contact Support" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#0d172a",
  //   alignItems: "center",
  //   paddingTop: 80,
  // },
  // avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  // name: { color: "white", fontSize: 22, fontWeight: 700 },
  // email: { color: "#94a3b8", marginTop: 6 },

  safe: { flex: 1, backgroundColor: "#0f172a" },
  container: { padding: 20 },
  card: {
    alignItems: "center",
    backgroundColor: "#1e293b",
    paddingVertical: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 16 },
  name: { color: "white", fontSize: 12, fontWeight: 700 },
  email: { color: "#94a3b8", marginTop: 6 },
  section: { color: "#94a3b8", fontSize: 14, marginTop: 24, marginBottom: 12 },
});

export default profile;
