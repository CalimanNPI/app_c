import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import {
  getUsuarioInfo,
  getClave,
  getMail,
  getImg,
  getNombre,
} from "../../api/auth";
import Layout from "../../components/Layout";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import { P_DATA } from "@env";
import PerfilEditScreen from "./PerfilEditScreen";

import BottomSheetModalPe from "../../components/BottomSheetModalPe";
import { color } from "react-native-reanimated";

const PerfilScreen = () => {
  const [cuenta, setCuenta] = useState<string>("");
  const [usuario, setusuario] = useState([]);
  const [mail, setMail] = useState<string>("");
  const [foto, setFoto] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");

  const userInfo = async () => {
    const data = await getUsuarioInfo();
    setusuario(data.usuario);
    setCuenta(await getClave());
    setMail(await getMail());
    setNombre(await getNombre());
    setFoto(await getImg());
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <Layout>
          <ImageBackground
            source={{ uri: P_DATA + "img/fondo.jpg" }}
            resizeMode={"cover"}
          >
            {usuario.map((value, index) => {
              return (
                <View style={styles.headerContent} key={index}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri:
                        foto != ""
                          ? foto
                          : "https://bootdey.com/img/Content/avatar/avatar6.png",
                    }}
                  />

                  <Text style={[FONTS.subTitle, { color: COLORS.white }]}>
                    {nombre}
                  </Text>
                  <Text style={[FONTS.body, { color: COLORS.white }]}>
                    {mail}
                  </Text>
                  <Text style={[FONTS.body, { color: COLORS.white }]}>
                    {cuenta}
                  </Text>
                </View>
              );
            })}
          </ImageBackground>

          <View style={styles.card}>
            <View style={styles.cardContent}>
              <BottomSheetModalPe
                title={"Perfil"}
                children={PerfilEditScreen}
              />
            </View>
          </View>
        </Layout>
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primaryB,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: COLORS.white,
    marginBottom: 10,
  },

  /******** card **************/
  card: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: COLORS.white,
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
});
export default PerfilScreen;

{
  /*<ImageBackground  source={require('../../../assets/coyi/Panorama_CDC.png')} resizeMode={"cover"}>
        {usuario.map((value) => {
          return (
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                }}
              />

              <Text style={styles.name}>{value["nombre"]} </Text>
              <Text style={styles.userInfo}>{mail}</Text>
              <Text style={styles.userInfo}>{cuenta} </Text>
            </View>
          );
        })}
    </ImageBackground>*/
}
