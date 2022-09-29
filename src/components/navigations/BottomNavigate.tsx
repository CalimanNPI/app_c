import React, { useCallback, useMemo, useRef } from "react";
import { Button, Image, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomSheet, {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import HomeNavigate from "./HomeNavigate";
import LocationScreen from "../../screens/LocationScreen";
import MessageScreen from "../../screens/MessageScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import PerfilScreen from "../../screens/PerfilScreen";
import ButtomMenu from "../ButtomMenu";

const Tab = createBottomTabNavigator();

const BottomNavigate = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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
          tabBarActiveTintColor: "#FF3B30",
          tabBarInactiveTintColor: "#8E8E93",
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
              backgroundColor: "#F2F2F7",
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: "#FF3B30",
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
              backgroundColor: "#F2F2F7",
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: "#FF3B30",
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
              backgroundColor: "#F2F2F7",
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: "#FF3B30",
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
              backgroundColor: "#F2F2F7",
            },
            headerTitleStyle: {
              fontFamily: "SpaceMono_700Bold",
              color: "#FF3B30",
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
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <ButtomMenu />
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomNavigate;
