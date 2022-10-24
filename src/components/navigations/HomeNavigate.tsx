import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import PublicityDesc from "../publications/PublicityDesc";
import InstalacioneDesc from "../instalaciones/InstalacioneDesc";
/**Navegation  menu */
import AboutScreen from "../../screens/munuscreen/AboutScreen";
import ActividadesScreen from "../../screens/munuscreen/ActividadesScreen";
import CafeteriaScreen from "../../screens/munuscreen/CafeteriaScreen";
import CuotasScreen from "../../screens/munuscreen/CuotasScreen";
import HorariosScreen from "../../screens/munuscreen/HorariosScreen";
import InstalacionesScreen from "../../screens/munuscreen/InstalacinesScreen";
import ReglamentoScreen from "../../screens/munuscreen/ReglamentoScreen";
import TramitesScreen from "../../screens/munuscreen/TramitesScreen";
import COLORS from "../util/Colors";

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
          headerTitleStyle: {
            color: COLORS.gray,
            fontFamily: "SpaceMono_700Bold",
          },
          headerStyle: { backgroundColor: COLORS.white },
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
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
      <Stack.Screen
        name="ActividadesScreen"
        component={ActividadesScreen}
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
      <Stack.Screen
        name="CafeteriaScreen"
        component={CafeteriaScreen}
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
      <Stack.Screen
        name="CuotasScreen"
        component={CuotasScreen}
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
      <Stack.Screen
        name="HorariosScreen"
        component={HorariosScreen}
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
      <Stack.Screen
        name="InstalacionesScreen"
        component={InstalacionesScreen}
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
      <Stack.Screen
        name="ReglamentoScreen"
        component={ReglamentoScreen}
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
      <Stack.Screen
        name="TramitesScreen"
        component={TramitesScreen}
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
