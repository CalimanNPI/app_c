import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InstalacinesScreen from "../../screens/screen/InstalacinesScreen";
import InstalacioneDesc from "../instalaciones/InstalacioneDesc";

import COLORS from "../util/Colors";

const Stack = createNativeStackNavigator();

const NavigationInstalacines = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="InstalacinesScreen"
        component={InstalacinesScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="InstalacioneDesc"
        component={InstalacioneDesc}
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

export default NavigationInstalacines;
