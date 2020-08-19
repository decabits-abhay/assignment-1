import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default Icon = ({ source }) => {
  return (
    <View style={styles.icon}>
      <Image source={source} style={styles.iconImage} />
    </View>
  );
};

const avatarSize = 36;
const styles = StyleSheet.create({
  icon: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    overflow: "hidden",
    padding: 6,
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
});
