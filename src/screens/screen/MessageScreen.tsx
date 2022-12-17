import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import Layout from "../../components/Layout";

import { sendEmail } from "../../api/api";
import ButtomComponent from "../../components/ButtomComponent";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import InputComponent from "../../components/InputComponent";
import InputAreaComponent from "../../components/InputAreaComponent";
import CenterSvgComponent from "../../components/svg/CenterSVG";
import SvgComponent from "../../components/svg/ButtomNew";
import ButtonBackComponent from "../../components/ButtomBackComponent";

const MailScreen = ({ navigation }: any) => {
  const [disable, setDisable] = useState<boolean>(false);

  const [email, setEmil] = useState({
    name: "",
    email: "",
    userKey: "",
    message: "",
  });

  const sendEmailCDC = async () => {
    setDisable(true);
    const data = await sendEmail(email);
    setDisable(false);
  };

  const handleChange = (name: any, value: any) =>
    setEmil({ ...email, [name]: value });

  return (
    <Layout>
      <ButtonBackComponent
        onPress={() => navigation.openDrawer()}
        icon={"menu-fold"}
      />
      <CenterSvgComponent />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[FONTS.title, styles.title]}>Envia un correo</Text>

          <InputComponent
            placeholder="Nombre"
            keyboardType={"default"}
            icon="mail"
            value={email.name}
            onChangeText={(text: string) => handleChange("name", text)}
            colorText={"white"}
            colorIcon={"white"}
          />

          <InputComponent
            placeholder="Correo electrónico"
            keyboardType={"email-address"}
            icon="user"
            value={email.email}
            onChangeText={(text: string) => handleChange("email", text)}
            colorText={"white"}
            colorIcon={"white"}
          />

          <InputComponent
            placeholder="Clave de usuario"
            keyboardType={"numeric"}
            icon="key"
            value={email.userKey}
            onChangeText={(text: string) => handleChange("userKey", text)}
            colorText={"white"}
            colorIcon={"white"}
          />

          <InputAreaComponent
            placeholder="Mensaje"
            keyboardType={"default"}
            icon="message1"
            value={email.message}
            onChangeText={(text: string) => handleChange("message", text)}
            colorText={"white"}
            colorIcon={"white"}
          />

          <View style={{ alignItems: "center" }}>
            <ButtomComponent
              onPress={sendEmailCDC}
              type={"primaryR"}
              size={"large"}
              label={"Enviar"}
              disabled={disable}
            />
          </View>
        </ScrollView>
      </View>
      <SvgComponent />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  title: {
    color: COLORS.white,
    marginVertical: 20,
    textAlign: "center",
  },
});

export default MailScreen;
