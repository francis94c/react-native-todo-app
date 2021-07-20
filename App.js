import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import appStyles from "./styles/main";
import colors from "./styles/colors";

export default function App() {
  return (
    <SafeAreaView style={appStyles.container}>
      <Text style={styles.titleText}>March 9, 2020</Text>
      <Text style={styles.summaryText}>5 incomplete 5 complete</Text>
      <View
        style={{
          borderBottomColor: colors.secondaryGrey,
          borderBottomWidth: 1,
        }}
      ></View>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.sectionTitleText}>Incomplete</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    ...appStyles.bigText,
    fontWeight: "bold",
    marginBottom: 8,
  },
  summaryText: {
    ...appStyles.smallText,
    color: colors.secondaryGrey,
    marginBottom: 16,
  },
  sectionTitleText: {
    ...appStyles.text,
    fontWeight: "bold",
  },
});
