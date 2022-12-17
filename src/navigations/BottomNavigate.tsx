import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigate from "./HomeNavigate";
import MainNavigate from "./MainNavigate";
import NotificationScreen from "../screens/notifications/NotificationScreen";
import COLORS from "../components/util/Colors";

const Tab = createBottomTabNavigator();

const BottomNavigate = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainNavigate"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }: any) => {
          if (route.name === "HomeNavigate") {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === "Notifications") {
            return <AntDesign name="bells" size={size} color={color} />;
          } else if (route.name === "MainNavigate") {
            return <AntDesign name="user" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: COLORS.primaryR,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeNavigate" component={HomeNavigate} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="MainNavigate" component={MainNavigate} />
    </Tab.Navigator>
  );
};

export default BottomNavigate;
