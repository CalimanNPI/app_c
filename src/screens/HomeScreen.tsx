import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Layout from "../components/Layout";
import PublicityList from "./publications/PublicityList";
import COLORS from "../components/util/Colors";
import FONTS from "../components/util/Fonts";
import LocationScreen from "./screen/LocationScreen";
import TitleComponent from "../components/TextTitleComponent";
import MenusItems from "./cafeteria/CafeteriaMenu";

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout>
        <View style={styles.contentHeader}>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={[FONTS.subTitle, { color: COLORS.gray, fontSize: 26 }]}
            >
              Bienvenido
            </Text>
            <Text style={[FONTS.body, { color: COLORS.primaryR }]}>
              Centro Deportivo Coyoacán A.C.
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign name="menu-fold" size={30} color={COLORS.primaryR} />
          </TouchableOpacity>
        </View>

        <PublicityList />

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <TitleComponent text={"Consulta nuestros menús"} />
          <MenusItems />
          <View style={{ flexDirection: "row" }}>
            {/* <EJJJS />
            <EJJJS /> */}
          </View>
        </View>

        <LocationScreen />
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
  },
  contentHeader: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  btn: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 2,
    //backgroundColor: "transparent",
    backgroundColor: COLORS.grayT0_3,
    borderRadius: 10,
    padding: 10,
  },
  bodyContent: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default HomeScreen;
