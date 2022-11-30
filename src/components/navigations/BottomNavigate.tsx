import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigate from "./HomeNavigate";
import MainNavigate from "./MainNavigate";
import NotificationScreen from "../../screens/NotificationScreen";
import COLORS from "../util/Colors";

const Tab = createBottomTabNavigator();

const BottomNavigate = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainNavigate"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }: any) => {
          let iconName;

          if (route.name === "HomeNavigate") {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === "Notifications") {
            return <Feather name={"bell"} size={size} color={color} />;
          } else if (route.name === "MainNavigate") {
            return <AntDesign name="user" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: COLORS.primaryR,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="HomeNavigate"
        component={HomeNavigate}
        options={() => ({
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="MainNavigate"
        component={MainNavigate}
        options={() => ({
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigate;
