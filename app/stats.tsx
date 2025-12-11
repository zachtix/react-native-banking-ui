import StatCategoryItem from "@/components/StatCategoryItem";
import statCategories from "@/data/statCategories";
import React, { useMemo } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

const stats = () => {
  const doughnutData = useMemo(
    () =>
      statCategories.map((c) => ({
        name: c.label,
        population: parseInt(c.value.replace(/[^\d]/g, "")),
        color: c.color,
        legendFontColor: "#fff",
        legendFontSize: 14,
      })),
    [statCategories]
  );
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.title}>Statistics</Text>
    //   <Text style={styles.text}>stats</Text>
    // </SafeAreaView>
    <ScrollView style={styles.safe} contentContainerStyle={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Spending Statistics</Text>

        <PieChart
          data={doughnutData}
          width={Dimensions.get("window").width - 40}
          height={220}
          accessor="population"
          backgroundColor="transparent"
          // paddingLeft="15"
          paddingLeft={String(Dimensions.get("window").width / 5)}
          center={[10, 0]}
          hasLegend={false}
          chartConfig={{ color: () => `white` }}
        />

        <View style={{ marginTop: 24 }}>
          {statCategories.map((item) => (
            <StatCategoryItem
              key={item.label}
              label={item.label}
              value={item.value}
              color={item.color}
            />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: { backgroundColor: "#0d172a", flex: 1, padding: 20 },
  // title: { color: "white", fontSize: 24, fontWeight: 700 },
  // text: { color: "#94a3b8", marginTop: 12 },

  safe: { flex: 1, backgroundColor: "#0d172a" },
  container: { padding: 20 },
  title: { color: "white", fontSize: 24, fontWeight: 700, marginBottom: 16 },
});

export default stats;
