import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";

import Theme from "../constants/theme";
import Icon from "./Icon";
import Avatar from "./Avatar";

export default function AddPost() {
  return (
    <View style={styles.createPostContainer}>
      <View style={styles.row}>
        <Avatar />

        <View style={styles.inputContainer}>
          <TextInput placeholder="Create a new post" />
        </View>
      </View>

      <View style={[styles.row, styles.iconsContainer]}>
        <Icon source={require("../../assets/icons/photograph.png")} />
        <Icon source={require("../../assets/icons/video-camera.png")} />
        <Icon source={require("../../assets/icons/audio.png")} />
        <Icon source={require("../../assets/icons/google-docs.png")} />
        <Icon source={require("../../assets/icons/google-sheets.png")} />
      </View>
    </View>
  );
}

const { spacing } = Theme;
const styles = StyleSheet.create({
  createPostContainer: {
    backgroundColor: "#e5e5f3",
    paddingVertical: 16,
    paddingHorizontal: spacing,
    marginVertical: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 4,
  },
  inputContainer: {
    paddingLeft: spacing,
    flexGrow: 1,
  },
});
