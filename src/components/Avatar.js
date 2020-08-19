import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.avatar}>
      <Image
        source={require("../../assets/avatar.gif")}
        style={styles.avatarImage}
      />
    </View>
  );
}

const avatarSize = 36;
const styles = StyleSheet.create({
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});
