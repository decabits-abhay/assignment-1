import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
} from "react-native";
import Theme from "../constants/theme";

const { width, height } = Dimensions.get("window");

export default function StatisticsCard({ item }) {
  return (
    <ImageBackground source={item.background} style={styles.card}>
      <View style={styles.chipContainer}>
        <Text style={styles.chip}>Pending: {item.pendingCount}</Text>
      </View>
      <Text style={styles.count}>{item.count}</Text>
      <Text style={styles.label}>{item.label}</Text>
    </ImageBackground>
  );
}

const { spacing } = Theme;
const styles = StyleSheet.create({
  card: {
    marginVertical: spacing / 2,
    width: width / 2 - 2 * spacing,
    borderRadius: 8,
    paddingLeft: 12,
    paddingVertical: 4,
    paddingRight: 4,
    backgroundColor: "red",
  },
  chip: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(255,255,255,0.4)",
    paddingHorizontal: 12,
    paddingVertical: 1,
    borderRadius: 12,
  },
  count: {
    paddingVertical: 2,
    fontSize: 30,
    fontWeight: "500",
    color: "white",
  },
  label: {
    fontSize: 17,
    color: "white",
  },

  chipContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
});
