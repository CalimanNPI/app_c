import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InstalacinesScreen from "../screens/instalaciones/InstalacinesScreen";
import InstalacioneDesc from "../screens/instalaciones/InstalacioneDesc";

import COLORS from "../components/util/Colors";
import InstalacionModal from "../screens/instalaciones/InstalacionModal";

const Stack = createNativeStackNavigator();

const NavigationInstalacines = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          name="InstalacinesScreen"
          component={InstalacinesScreen}
          options={() => ({ headerShown: false })}
        />
        <Stack.Screen
          name="InstalacioneDesc"
          component={InstalacioneDesc}
          options={() => ({ headerShown: false })}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "containedTransparentModal",
          headerShown: false,
        }}
      >
        <Stack.Screen name="InstalacionModal" component={InstalacionModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NavigationInstalacines;
