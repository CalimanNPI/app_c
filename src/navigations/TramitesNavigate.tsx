import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import COLORS from "../components/util/Colors";

import PasesVisita from "../screens/tramites/PasesVisita";
import UsuarioEspecial from "../screens/tramites/UsuarioEspecial";
import UsuarioInstitucional from "../screens/tramites/UsuarioInstitucional";

const Tab = createMaterialTopTabNavigator();

function TramitesNavigate() {
  return (
    <Tab.Navigator
      initialRouteName="UsuarioInstitucional"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryR,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: COLORS.white },
        tabBarIndicatorStyle: { backgroundColor: COLORS.primaryR },
      }}
    >
      <Tab.Screen
        name="PasesVisita"
        component={PasesVisita}
        options={{ tabBarLabel: "Pases de Visita" }}
      />
      <Tab.Screen
        name="UsuarioEspecial"
        component={UsuarioEspecial}
        options={{ tabBarLabel: "Usuario Especial" }}
      />
      <Tab.Screen
        name="UsuarioInstitucional"
        component={UsuarioInstitucional}
        options={{ tabBarLabel: "Usuario Institucional" }}
      />
    </Tab.Navigator>
  );
}

export default TramitesNavigate;
