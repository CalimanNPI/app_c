import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import HomeNavigate from "./HomeNavigate";
import LocationScreen from "../../screens/LocationScreen";
import MessageScreen from "../../screens/MessageScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import PerfilScreen from "../../screens/PerfilScreen";
import ButtomMenu from "../bottomsheet/BottomMenu";
import COLORS from "../util/Colors";

const Tab = createBottomTabNavigator();

const BottomNavigate = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isOpen, setIsOpen] = useState(false);

  // variables
  const snapPoints = useMemo(() => ["30%", "60%", "90%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
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
              return (
                <FontAwesome name="user-circle" size={size} color={color} />
              );
            }
          },
          tabBarActiveTintColor: COLORS.primaryR,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeNavigate}
          options={() => ({
            title: "CENTRO DEPORTIVO COYOACÁN A.C.",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: COLORS.primaryR,
              fontSize: 10,
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
            headerRight: () => (
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={{ marginRight: 17 }}
              >
                <FontAwesome name={"bars"} size={24} color={COLORS.primaryR} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Ubicación"
          component={LocationScreen}
          options={() => ({
            title: "CENTRO DEPORTIVO COYOACÁN A.C.",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: COLORS.primaryR,
              fontSize: 10,
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
            headerRight: () => (
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={{ marginRight: 17 }}
              >
                <FontAwesome name={"bars"} size={24} color={COLORS.primaryR} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Notificaciones"
          component={NotificationScreen}
          options={() => ({
            title: "CENTRO DEPORTIVO COYOACÁN A.C.",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: COLORS.primaryR,
              fontSize: 10,
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
            headerRight: () => (
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={{ marginRight: 17 }}
              >
                <FontAwesome name={"bars"} size={24} color={COLORS.primaryR} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Correo"
          component={MessageScreen}
          options={() => ({
            title: "CENTRO DEPORTIVO COYOACÁN A.C.",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: COLORS.primaryR,
              fontSize: 10,
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
            headerRight: () => (
              <TouchableOpacity
                onPress={handlePresentModalPress}
                style={{ marginRight: 17 }}
              >
                <FontAwesome name={"bars"} size={24} color={COLORS.primaryR} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={() => ({
            title: "",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
          })}
        />
      </Tab.Navigator>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        onDismiss={() => setIsOpen(false)}
      >
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
          <ButtomMenu />
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomNavigate;
