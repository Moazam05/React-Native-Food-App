import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
