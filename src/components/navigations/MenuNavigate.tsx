import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../../screens/munuscreen/AboutScreen";
import ActividadesScreen from "../../screens/munuscreen/ActividadesScreen";
import CafeteriaScreen from "../../screens/munuscreen/CafeteriaScreen";
import CuotasScreen from "../../screens/munuscreen/CuotasScreen";
import HorariosScreen from "../../screens/munuscreen/HorariosScreen";
import InstalacionesScreen from "../../screens/munuscreen/InstalacinesScreen";
import ReglamentoScreen from "../../screens/munuscreen/ReglamentoScreen";

const Stack = createNativeStackNavigator();

const NavigationMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
      <Stack.Screen
        name="ActividadesScreen"
        component={ActividadesScreen}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
      <Stack.Screen
        name="CafeteriaScreen"
        component={CafeteriaScreen}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
      <Stack.Screen
        name="CuotasScreen"
        component={CuotasScreen}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
      <Stack.Screen
        name="HorariosScreen"
        component={HorariosScreen}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
      <Stack.Screen
        name="InstalacionesScreen"
        component={InstalacionesScreen}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
      <Stack.Screen
        name="ReglamentoScreen"
        component={ReglamentoScreen}
        options={() => ({
          title: "",
          headerStyle: { backgroundColor: "#F2F2F7", color: "#FF3B30" },
        })}
      />
    </Stack.Navigator>
  );
};

export default NavigationMenu;
