import React from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import PublicityDesc from '../publications/PublicityDesc'

const Stack = createNativeStackNavigator();

const NavigationHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: "CENTRO DEPORTIVO COYOACÁN A.C.",
          headerTitleAlign: "center",
         headerShown: false, 
        })}
      />
      <Stack.Screen
        name="PublicityDesc"
        component={PublicityDesc}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
    </Stack.Navigator>
  );
};


export default NavigationHome;
