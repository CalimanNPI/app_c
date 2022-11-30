import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import COLORS from "../util/Colors";
import { getProfFoto, getProf } from "../../api/auth";
import FONTS from "../util/Fonts";

const Profesor = (props: any) => {
  const [foto, setFoto] = useState<string>();
  const [user, setUser] = useState<string>();
  const [mail, setMail] = useState<string>();
  const [tel, setTel] = useState<string>();
  const getFoto = async () => {
    setFoto(await getProfFoto(props.clave));
    const data = await getProf(props.clave);
    setMail(data[0]["mail"].trim());
    setTel(data[0]["tel_cel"].trim());
    setUser(data[0]["nombre"].trim());
    console.log(data[0]["nombre"].trim());
  };

  useEffect(() => {
    getFoto();
  }, []);

  return (
    <View style={[styles.card, { borderColor: COLORS.primaryB }]}>
      <View style={styles.cardContent}>
        <Image
          style={[styles.image, styles.imageContent]}
          source={{ uri: foto }}
          resizeMode={"center"}
        />
        <Text style={[FONTS.body, { marginLeft: 10}]}>
          {user}
        </Text>
      </View>

      <View style={[styles.cardContent, styles.tagsContent]}>
        <View style={styles.btnColor}>
          <Text style={FONTS.desc}>{mail ? mail : "No cuenta con Email"}</Text>
        </View>
        <View style={styles.btnColor}>
          <Text style={FONTS.desc}>
            {tel != "0" ? tel : "No cuenta con Tel"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardContent: {
    flexDirection: "row",
    flexWrap:"wrap", 
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: "wrap",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
});

export default Profesor;
