import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import PerfilScreen from "../screens/perfilscreen/PerfilScreen";

import { getUsuarioAuth } from "../api/auth";

const Stack = createNativeStackNavigator();

const MainNavigate = ({ navigation }: any) => {
  const [isLogged, setIsLogged] = useState<boolean>();

  const loadPerfil = async () => {
    const data = await getUsuarioAuth();
    const booleanVar = data.valueOf();
    if (data) {
      //console.log("esta bien");
      navigation.push("PerfilScreen");
      setIsLogged(true);
    } else {
      setIsLogged(false);
      navigation.push("LoginScreen");
      //console.log("esta mal");
    }
    setIsLogged(booleanVar);
  };

  useEffect(() => {
    loadPerfil();
    //console.log(isLogged, "isLogged");
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={!isLogged ? "LoginScreen" : "PerfilScreen"}
    >
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigate;
