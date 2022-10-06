import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const menu = [
  {
    id: "1",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Actividades",
    route: "ActividadesScreen",
  },
  {
    id: "2",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Instalaciones",
    route: "InstalacionesScreen",
  },
  {
    id: "3",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Cafetería",
    route: "CafeteriaScreen",
  },
  {
    id: "4",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Cuotas",
    route: "CuotasScreen",
  },
  {
    id: "5",
    image: require("../../assets/Onboarding/Inicio-2.png"),
    title: "Horarios",
    route: "HorariosScreen",
  },
  {
    id: "7",
    image: require("../../assets/Onboarding/Inicio-2.png"),
    title: "Reglamentos",
    route: "ReglamentoScreen",
  },
  {
    id: "8",
    image: require("../../assets/Onboarding/Inicio-2.png"),
    title: "Historia",
    route: "AboutScreen",
  },
];

const ButtomMenu = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ marginTop: 20, marginHorizontal: 15 }}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }: any) => {
          return (
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: 5,
              }}
              onPress={() => navigation.navigate(item.route)}
            >
              <View style={{ backgroundColor: "#D8D8DC", borderRadius: 20 }}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  source={item.image}
                />
              </View>
              <Text style={styles.textTitle}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
  },
});

export default ButtomMenu;
