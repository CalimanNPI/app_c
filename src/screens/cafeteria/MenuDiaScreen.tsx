import React from "react";
import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import { P_DATA } from "@env";
import Layout from "../../components/Layout";
import TitleComponent from "../../components/TextTitleComponent";
import ButtonBackComponent from "../../components/ButtomBackComponent";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";

const MenuDiaScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Layout>
        <ButtonBackComponent onPress={() => navigation.pop()} icon={"left"} />
        <View
          style={{
            width: "100%",
            marginTop: 30,
            flexDirection: "column",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: P_DATA + "menus/img/dia.png" }}
              style={{ width: 300, height: 400, borderRadius: 20 }}
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <View style={styles.row}>
              <TitleComponent text={"Sincronizadas"} />

              <View style={[styles.row, { justifyContent: "flex-end" }]}>
                <Feather name="dollar-sign" size={20} color={COLORS.primaryR} />
                <Text style={[FONTS.subTitle, { fontSize: 20 }]}>150</Text>
              </View>
            </View>

            <View style={[styles.row, { justifyContent: "flex-start" }]}>
              <Feather name="clock" size={15} color={COLORS.gray} />
              <Text style={[FONTS.desc, { marginLeft: 10 }]}>30-40MN </Text>
            </View>

            <View style={[styles.row, { justifyContent: "flex-start" }]}>
              <Feather name="clock" size={15} color={COLORS.gray} />
              <Text style={[FONTS.desc, { marginLeft: 10 }]}>350g</Text>
              <View style={styles.separator} />
              <Feather name="clock" size={15} color={COLORS.gray} />
              <Text style={[FONTS.desc, { marginLeft: 10 }]}>
                Bajo en calorias
              </Text>
            </View>

            <View style={[styles.row, { justifyContent: "flex-start" }]}>
              <Text style={[FONTS.desc, { marginLeft: 10 }]}>Chef:</Text>
              <Text
                style={[FONTS.desc, { marginLeft: 5, color: COLORS.primaryR }]}
              >
                30-40MN
              </Text>
            </View>

            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                porro temporibus? Quaerat tempora sunt dolorum, odio cum, veniam
                quidem sed ullam exercitationem beatae iure magni rerum
                assumenda fugiat maxime fugit.
              </Text>
            </View>
          </View>
        </View>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  separator: {
    borderLeftColor: COLORS.grayT0_3,
    borderLeftWidth: 1,
    height: 20,
    marginHorizontal: 10,
  },
});
export default MenuDiaScreen;
