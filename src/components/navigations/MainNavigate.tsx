import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/perfilscreen/LoginScreen";
import PerfilScreen from "../../screens/perfilscreen/PerfilScreen";

import { getUsuarioAuth } from "../../api/auth";

const Stack = createNativeStackNavigator();

const MainNavigate = () => {
  const [isLogged, setIsLogged] = useState<boolean>();

  const loadPerfil = async () => {
    const data = await getUsuarioAuth();
    console.log(data, "loadPerfil");
    setIsLogged(data);
  };

  useEffect(() => {
    loadPerfil();
    console.log(isLogged);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={!isLogged ? "LoginScreen" : "PerfilScreen"}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigate;
