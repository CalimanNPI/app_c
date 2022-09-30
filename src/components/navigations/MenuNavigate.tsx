import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../munuscreen/AboutScreen";
import ActividadesScreen from "../munuscreen/ActividadesScreen";
import CafeteriaScreen from "../munuscreen/CafeteriaScreen";
import CuotasScreen from "../munuscreen/CuotasScreen";
import HorariosScreen from "../munuscreen/HorariosScreen";
import InstalacionesScreen from "../munuscreen/InstalacinesScreen";
import ReglamentoScreen from "../munuscreen/ReglamentoScreen";

const Stack = createNativeStackNavigator();

const NavigationMenu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="ActividadesScreen" component={ActividadesScreen} />
      <Stack.Screen name="CafeteriaScreen" component={CafeteriaScreen} />
      <Stack.Screen name="CuotasScreen" component={CuotasScreen} />
      <Stack.Screen name="HorariosScreen" component={HorariosScreen} />
      <Stack.Screen name="InstalacionesScreen" component={InstalacionesScreen} />
      <Stack.Screen name="ReglamentoScreen" component={ReglamentoScreen} />
    </Stack.Navigator>
  );
};

export default NavigationMenu;
