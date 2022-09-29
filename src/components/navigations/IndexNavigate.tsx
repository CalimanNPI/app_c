import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigate from "../navigations/BottomNavigate";
import OnboardingScreen from "../../screens/OnboardingScreen";

import isAppFirstLaunchedC from "../../auth/LoadFirst";

const Stack = createStackNavigator();

export default function IndexNavigate() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(
    null
  );

  const getData = async () => {
    const isData = await isAppFirstLaunchedC();
    setIsAppFirstLaunched(isData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={() => ({
                headerShown: false,
              })}
            />
          )}
          <Stack.Screen
            name="BottomNavigate"
            component={BottomNavigate}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
