import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{title}</Text>
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
