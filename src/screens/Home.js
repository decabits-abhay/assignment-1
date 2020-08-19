import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import { CARDS, POSTS } from "../constants";
import Theme from "../constants/theme";

import StatisticsCard from "../components/StatisticsCard";
import AddPost from "../components/AddPost";
import PostCard from "../components/PostCard";

export default Home = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />

    <ScrollView>
      <Text style={styles.heading}>Activity</Text>

      <View style={styles.cardsContainer}>
        {CARDS.map((i) => (
          <StatisticsCard key={i.label} item={i} />
        ))}
      </View>

      <AddPost />

      <View>
        {POSTS.map((i) => (
          <PostCard key={i.id} item={i} />
        ))}
      </View>
    </ScrollView>
  </View>
);

const { spacing } = Theme;
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: spacing,
    marginBottom: spacing * 2,
  },

  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
