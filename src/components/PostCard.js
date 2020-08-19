import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Theme from "../constants/theme";
import Icon from "./Icon";
import Avatar from "./Avatar";

export default function PostCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Avatar />

        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.lastSeen}>{item.lastSeen} hour ago</Text>
        </View>
      </View>

      <Image source={{ uri: item.image }} style={styles.postImage} />

      <View style={styles.captionContainer}>
        <Text style={styles.lastSeen}>{item.caption}</Text>
      </View>

      <View style={[styles.row, styles.iconsContainer]}>
        <Icon source={require("../../assets/icons/heart.png")} />
        <Text style={styles.count}>{item.likes}</Text>

        <Icon source={require("../../assets/icons/comment.png")} />
        <Text style={styles.count}>{item.comments}</Text>

        <View style={{ flexGrow: 1 }} />

        <Icon source={require("../../assets/icons/eye.png")} />
        <Text style={styles.count}>Views ({item.views})</Text>
      </View>
    </View>
  );
}

const { spacing } = Theme;
const styles = StyleSheet.create({
  card: {
    margin: spacing,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing,
  },

  userInfoContainer: {
    paddingLeft: spacing,
    flexGrow: 1,
  },
  userName: {
    fontSize: 18,
  },
  lastSeen: {
    fontSize: 14,
    color: "#aaa",
  },
  postImage: {
    width: "100%",
    height: 200,
  },

  captionContainer: {
    padding: spacing,
  },

  iconsContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 4,
  },

  count: {
    marginRight: spacing,
  },
});
