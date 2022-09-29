import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";

import Layout from "../components/Layout";

import { sendEmail } from "../api/api";
import ButtomGradient from "../components/ButtomGradient";
import BackgroundSvg from "../components/BackgroundSvg";

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

    alert(data.message);
  };

  const handleChange = (name: any, value: any) =>
    setEmil({ ...email, [name]: value });

  return (
    <Layout>
      <BackgroundSvg style={styles.containerSVG} />
      <>
        <View style={styles.container}>
          <Text style={styles.subTitle}> Envia un correo</Text>
          <TextInput
            autoCorrect={true}
            placeholder="Nombre"
            placeholderTextColor="#8E8E93"
            value={email.name}
            style={styles.textInput}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#8E8E93"
            value={email.email}
            style={styles.textInput}
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            placeholder="Clave usuario"
            placeholderTextColor="#8E8E93"
            value={email.userKey}
            style={styles.textInput}
            onChangeText={(text) => handleChange("userKey", text)}
          />
          <TextInput
            placeholder="Mensaje"
            placeholderTextColor="#8E8E93"
            multiline={true}
            numberOfLines={5}
            style={styles.textAreaInput}
            value={email.message}
            onChangeText={(text) => handleChange("message", text)}
          />
          <ButtomGradient onPress={sendEmailCDC} textButton={"Enviar"} />
        </View>
      </>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    backgroundColor: "#F2F2F7",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 10,
    borderRadius: 20,
    shadowColor: "#242426",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignContent: "center",
    position: "absolute",
  },
  titulo: {
    fontSize: 80,
    color: "#8E8E93",
    fontWeight: "bold",
    fontFamily: "SpaceMono_400Regular",
  },
  subTitle: {
    fontSize: 30,
    color: "#8E8E93",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "SpaceMono_400Regular",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#F2F2F7",
    fontFamily: "SpaceMono_400Regular",
    borderColor: "#FF3B30",
    borderWidth: 2,
  },
  textAreaInput: {
    padding: 10,
    paddingStart: 30,
    width: "100%",
    height: 100,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#F2F2F7",
    fontFamily: "SpaceMono_400Regular",
    borderColor: "#FF3B30",
    borderWidth: 1.5,
  },
  forgotPassword: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
    fontFamily: "SpaceMono_400Regular",
  },
});

export default MailScreen;
