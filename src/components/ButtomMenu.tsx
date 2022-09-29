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

const menu = [
  {
    id: "1",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Actividades",
    route: "Galery",
  },
  {
    id: "2",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Instalaciones",
    route: "Galery",
  },
  {
    id: "3",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Cafetería",
    route: "Galery",
  },
  {
    id: "4",
    image: require("../../assets/Onboarding/Inicio-1.png"),
    title: "Cuotas",
    route: "Galery",
  },
  {
    id: "5",
    image: require("../../assets/Onboarding/Inicio-2.png"),
    title: "Horarios",
    route: "Galery",
  },
  {
    id: "6",
    image: require("../../assets/Onboarding/Inicio-2.png"),
    title: "Contacto",
    route: "Galery",
  },
  {
    id: "7",
    image: require("../../assets/Onboarding/Inicio-2.png"),
    title: "Increase",
    route: "Reglamentos",
  },
  {
    id: "8",
    image: require("../../assets/Onboarding/Inicio-2.png"),
    title: "Historia",
    route: "Galery",
  },
];

const ButtomMenu = () => {
  return (
    <SafeAreaView style={{ marginTop: 20, marginHorizontal: 15 }}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={RenderButtom}
      />
    </SafeAreaView>
  );
};

const RenderButtom = ({ item }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 5,
      }}
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
    </View>
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
