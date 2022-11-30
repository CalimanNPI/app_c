import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import { getUsuarioInfo, getClave, getMail, getImg } from "../../api/auth";
import Layout from "../../components/Layout";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import { P_DATA } from "@env";

const PerfilScreen = () => {
  const [cuenta, setCuenta] = useState<string>("");
  const [usuario, setusuario] = useState([]);
  const [mail, setMail] = useState<string>("");
  const [foto, setFoto] = useState<string>("");

  const userInfo = async () => {
    const data = await getUsuarioInfo();
    setusuario(data.usuario);
    setCuenta(await getClave());
    setMail(await getMail());
    setMail(await getMail());

    setFoto(await getImg());
    console.log(data);
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
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
                {value["nombre"].trim()}
              </Text>
              <Text style={[FONTS.body, { color: COLORS.white }]}>{mail}</Text>
              <Text style={[FONTS.body, { color: COLORS.white }]}>
                {cuenta}
              </Text>
            </View>
          );
        })}
      </ImageBackground>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/cottage.png",
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Home</Text>
          </View>
        </View>
      </View>
    </Layout>
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

  body: {
    backgroundColor: COLORS.white,
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: COLORS.gray,
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
