import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import PublicityDesc from "../publications/PublicityDesc";

import COLORS from "../util/Colors";

const Stack = createNativeStackNavigator();

const NavigationHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PublicityDesc"
        component={PublicityDesc}
        options={() => ({
          title: "",
          headerTitleStyle: {
            color: COLORS.gray,
            fontFamily: "SpaceMono_700Bold",
          },
          headerStyle: { backgroundColor: COLORS.white },
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};

export default NavigationHome;
