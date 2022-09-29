import React from "react";
import { Image } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigate from "./HomeNavigate";
import LocationScreen from "../../screens/LocationScreen";
import MessageScreen from "../../screens/MessageScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import PerfilScreen from "../../screens/PerfilScreen";

const Tab = createBottomTabNavigator();

const BottomNavigate = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Correo") {
            return (
              <AntDesign name="customerservice" size={size} color={color} />
            );
          } else if (route.name === "Mensajes") {
            iconName = "comments-o";
          } else if (route.name === "Ubicación") {
            return <AntDesign name="enviromento" size={size} color={color} />;
          } else if (route.name === "Inicio") {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === "Notificaciones") {
            return <FontAwesome name={"bell-o"} size={size} color={color} />;
          } else if (route.name === "Perfil") {
            return <FontAwesome name="user-circle" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "#FF3B30",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeNavigate}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Ubicación"
        component={LocationScreen}
        options={() => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F2F2F7",
          },
          headerLeft: () => (
            <Image
              source={require("../../../assets/coyi/CDCrojo.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 17,
              }}
            />
          ),
          tabBarStyle: { backgroundColor: "#F2F2F7" },
        })}
      />
      <Tab.Screen
        name="Notificaciones"
        component={NotificationScreen}
        options={() => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F2F2F7",
          },
          headerLeft: () => (
            <Image
              source={require("../../../assets/coyi/CDCrojo.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 17,
              }}
            />
          ),
          tabBarStyle: { backgroundColor: "#F2F2F7" },
        })}
      />
      <Tab.Screen
        name="Correo"
        component={MessageScreen}
        options={() => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F2F2F7",
          },
          headerLeft: () => (
            <Image
              source={require("../../../assets/coyi/CDCrojo.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginLeft: 17,
              }}
            />
          ),
          tabBarStyle: { backgroundColor: "#F2F2F7" },
        })}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={() => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F2F2F7",
          },

          tabBarStyle: { backgroundColor: "#F2F2F7" },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigate;
