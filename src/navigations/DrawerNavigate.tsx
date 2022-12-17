import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, Feather } from "@expo/vector-icons";

/** Navegation  menu */
import BottomNavigate from "./BottomNavigate";
import InstalacionNavigate from "./InstalacionNavigate";
import ActividadNavigate from "./ActividadNavigate";

/** */
import AboutScreen from "../screens/screen/AboutScreen";
//import ActividadesScreen from "../../screens/screen/ActividadesScreen";
import CafeteriaScreen from "../screens/cafeteria/CafeteriaScreen";
import CuotasScreen from "../screens/screen/CuotasScreen";
import HorariosScreen from "../screens/screen/HorariosScreen";
//import InstalacionesScreen from "../../screens/screen/InstalacinesScreen";
import ReglamentoScreen from "../screens/screen/ReglamentoScreen";
import TramitesScreen from "../screens/tramites/TramitesScreen";
//import LocationScreen from "../screens/screen/LocationScreen";
import MessageScreen from "../screens/screen/MessageScreen";

import COLORS from "../components/util/Colors";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigate = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitle: "", //"CENTRO DEPORTIVO COYOACÁN A.C.",
        // headerTitleStyle: {
        //   fontFamily: "SpaceMono_700Bold",
        //   color: COLORS.primaryR,
        //   fontSize: 14,
        // },
        // headerStyle: {
        //   backgroundColor: COLORS.white,
        // },
        headerLeftContainerStyle: {
          width: 50,
          height: 50,
          backgroundColor: COLORS.white,
          marginTop: 10,
          marginLeft: 10,
          borderRadius: 20,
        },
        headerShown: false,
        headerTransparent: true,
        drawerActiveTintColor: COLORS.primaryR,
        drawerInactiveTintColor: COLORS.gray,
        drawerLabelStyle: {
          fontFamily: "SpaceMono_700Bold",
          fontSize: 14,
        },
        drawerType: "front",
        //headerRight: () => (
        //  <Image
        //    source={require("../../../assets/coyi/CDCrojo.png")}
        //    style={{
        //      width: 35,
        //      height: 35,
        //      resizeMode: "contain",
        //      marginRight: 17,
        //    }}
        //  />
        //),
      }}
    >
      <Drawer.Screen
        name="Start"
        component={BottomNavigate}
        options={{
          title: "Inicio",
          drawerIcon: () => (
            <AntDesign name="home" size={25} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="Sport"
        component={ActividadNavigate}
        options={{
          title: "Actividades Deportivas",
          drawerIcon: () => (
            <AntDesign name="hearto" size={24} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="Cafeteria"
        component={CafeteriaScreen}
        options={{
          title: "Cafetería",
          drawerIcon: () => (
            <Feather name="coffee" size={24} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="Dues"
        component={CuotasScreen}
        options={{
          title: "Cuotas",
          drawerIcon: () => (
            <Feather name="dollar-sign" size={24} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="Installations"
        component={InstalacionNavigate}
        options={{
          title: "Instalaciones",
          drawerIcon: () => (
            <Feather name="image" size={25} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="Schedules"
        component={HorariosScreen}
        options={{
          title: "Horarios",
          drawerIcon: () => (
            <AntDesign name="calendar" size={25} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="Formalities"
        component={TramitesScreen}
        options={{
          title: "Tramites",
          drawerIcon: () => (
            <Feather name="book-open" size={24} color={COLORS.primaryR} />
          ),
        }}
      />

      {/*<Drawer.Screen
        name="Location"
        component={LocationScreen}
        options={{
          title: "Ubicación",
          drawerIcon: () => (
            <Feather name="map-pin" size={24} color={COLORS.primaryR} />
          ),
        }}
      />*/}

      <Drawer.Screen
        name="Mail"
        component={MessageScreen}
        options={{
          title: "Mensaje",
          drawerIcon: () => (
            <AntDesign name="mail" size={25} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="History"
        component={AboutScreen}
        options={{
          title: "Historia",
          drawerIcon: () => (
            <Feather name="message-circle" size={24} color={COLORS.primaryR} />
          ),
        }}
      />

      <Drawer.Screen
        name="Regulations"
        component={ReglamentoScreen}
        options={{
          title: "Reglamento",
          drawerIcon: () => (
            <AntDesign name="book" size={25} color={COLORS.primaryR} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigate;
