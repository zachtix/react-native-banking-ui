import CardBalance from "@/components/CardBalance";
import Header from "@/components/Header";
import TransactionItem from "@/components/TransactionItem";
import transactions from "@/data/transaction";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scroll}>
          <CardBalance />
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>Recent Transactions</Text>
              </View>
              {/* ถ้าต้องการปุ่มดูเพิ่มเติมใส่ตรงนี้ */}
            </View>
            {transactions.map((t) => (
              <TransactionItem key={t.id} item={t} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0d172a" },
  // safe: { flex: 1, backgroundColor: "white" },
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 40 },
  section: { marginTop: 24, gap: 16 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { color: "#cbd5e1", fontSize: 16, fontWeight: "600" },
});
