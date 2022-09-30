import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import PublicityDesc from "../publications/PublicityDesc";
/**Navegation  menu */
import AboutScreen from "../munuscreen/AboutScreen";
import ActividadesScreen from "../munuscreen/ActividadesScreen";
import CafeteriaScreen from "../munuscreen/CafeteriaScreen";
import CuotasScreen from "../munuscreen/CuotasScreen";
import HorariosScreen from "../munuscreen/HorariosScreen";
import InstalacionesScreen from "../munuscreen/InstalacinesScreen";
import ReglamentoScreen from "../munuscreen/ReglamentoScreen";

const Stack = createNativeStackNavigator();

const NavigationHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
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
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="ActividadesScreen" component={ActividadesScreen} />
      <Stack.Screen name="CafeteriaScreen" component={CafeteriaScreen} />
      <Stack.Screen name="CuotasScreen" component={CuotasScreen} />
      <Stack.Screen name="HorariosScreen" component={HorariosScreen} />
      <Stack.Screen
        name="InstalacionesScreen"
        component={InstalacionesScreen}
      />
      <Stack.Screen name="ReglamentoScreen" component={ReglamentoScreen} />
    </Stack.Navigator>
  );
};

export default NavigationHome;
