import React, { useState } from "react";
import { Text, StyleSheet, Dimensions, View } from "react-native";

import Layout from "../components/Layout";

import { sendEmail } from "../api/api";
import ButtomComponent from "../components/ButtomComponent";
import BackgroundSvg from "../components/BackgroundSvg";
import COLORS from "../components/util/Colors";
import FONTS from "../components/util/Fonts";
import InputComponent from "../components/InputComponent";
import InputAreaComponent from "../components/InputAreaComponent";

const { width } = Dimensions.get("screen");
const MailScreen = () => {
  const [email, setEmil] = useState({
    name: "",
    email: "",
    userKey: "",
    message: "",
  });

  const sendEmailCDC = async () => {
    const data = await sendEmail(email);
    alert(data);
  };

  const handleChange = (name: any, value: any) =>
    setEmil({ ...email, [name]: value });

  return (
    <Layout>
      <BackgroundSvg style={styles.containerSVG} />

      <View style={styles.container}>
        <Text style={[FONTS.title, { color: COLORS.primaryR }]}>
          Envia un correo
        </Text>

        <InputComponent
          placeholder="Nombre"
          keyboardType={"default"}
          icon="mail"
          value={email.name}
          onChangeText={(text: string) => handleChange("name", text)}
        />
        <InputComponent
          placeholder="Nombre"
          keyboardType={"default"}
          icon="user"
          value={email.email}
          onChangeText={(text: string) => handleChange("email", text)}
        />
        <InputComponent
          placeholder="Nombre"
          keyboardType={"default"}
          icon="key"
          value={email.userKey}
          onChangeText={(text: string) => handleChange("userKey", text)}
        />

        <InputAreaComponent
          placeholder="Nombre"
          keyboardType={"default"}
          icon="message1"
          value={email.message}
          onChangeText={(text: string) => handleChange("message", text)}
        />

        <ButtomComponent
          onPress={sendEmailCDC}
          type={"primaryR"}
          size={"large"}
          label={"Enviar"}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "90%",
    backgroundColor: COLORS.white,

    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 10,
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
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignContent: "center",
    position: "absolute",
  },
});

export default MailScreen;
