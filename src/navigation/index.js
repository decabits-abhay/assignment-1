import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon";
import Home from "../screens/Home";
import Other from "../screens/Other";

const Tab = createBottomTabNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === "Tab1") {
              icon = require("../../assets/icons/compass.png");
            } else if (route.name === "Tab2") {
              icon = require("../../assets/icons/search.png");
            } else if (route.name === "Tab3") {
              icon = require("../../assets/icons/email.png");
            } else {
              icon = require("../../assets/icons/user.png");
            }
            return <Icon source={icon} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen name="Tab1" component={Home} />
        <Tab.Screen name="Tab2" component={Other} />
        <Tab.Screen name="Tab3" component={Other} />
        <Tab.Screen name="Tab4" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
