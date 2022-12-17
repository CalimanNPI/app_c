import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PublicityDesc from "../screens/publications/PublicityDesc";
import NotifyModal from "../screens/notifications/NotifyModal";
import MenuDiaScreen from "../screens/cafeteria/MenuDiaScreen";
import MenuCCScreen from "../screens/cafeteria/MenuCCScreen";

const Stack = createNativeStackNavigator();

const NavigationHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PublicityDesc" component={PublicityDesc} />
        <Stack.Screen name="MenuDiaScreen" component={MenuDiaScreen} />
        <Stack.Screen name="MenuCCScreen" component={MenuCCScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="NotifyModal" component={NotifyModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NavigationHome;
