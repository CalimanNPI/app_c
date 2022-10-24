import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";

const menu = [
  {
    id: "1",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Actividades",
    route: "ActividadesScreen",
  },
  {
    id: "2",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Taamites",
    route: "TramitesScreen",
  },
  {
    id: "3",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Instalaciones",
    route: "InstalacionesScreen",
  },
  {
    id: "4",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Cafetería",
    route: "CafeteriaScreen",
  },
  {
    id: "5",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Cuotas",
    route: "CuotasScreen",
  },
  {
    id: "6",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Horarios",
    route: "HorariosScreen",
  },
  {
    id: "7",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Reglamentos",
    route: "ReglamentoScreen",
  },
  {
    id: "8",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Historia",
    route: "AboutScreen",
  },
];

const ButtomMenu = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      numColumns={4}
      renderItem={({ item }: any) => {
        return (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate(item.route)}
          >
            <View style={styles.buttom}>
              <Image style={styles.image} source={item.image} />
            </View>
            <Text style={[FONTS.title, { color: COLORS.gray, fontSize: 10 }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 5,
  },
  buttom: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default ButtomMenu;
