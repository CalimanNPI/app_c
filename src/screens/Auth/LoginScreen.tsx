import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import InputComponent from "../../components/InputComponent";
import ButtomComponent from "../../components/ButtomComponent";
import AlertComponent from "../../components/AlertComponent";

import { login, setTokenAuth, setUsuarioAuth } from "../../api/auth";

import { P_DATA } from "@env";
import COLORS from "../../components/util/Colors";

const LoginScreen = ({ navigation }: any) => {
  const [disable, setDisable] = useState<boolean>(false);

  const [form, setForm] = useState({ clave: "", email: "", pass: "" });
  const [errro, setErrro] = useState([]);

  const onClickListener = async () => {
    setDisable(true);
    const data = await login(form);

    //console.log(data.data);
    if (data.data.token) {
      setErrro([]);
      setTokenAuth(form.clave, data.data.token);
      setUsuarioAuth(data.data);
      setForm({ clave: "", email: "", pass: "" });
      navigation.push("PerfilScreen");
    }

    if (data.data.error) {
      setErrro(data.data.error);
    }

    setDisable(false);
  };

  const handleChange = (name: any, value: any) =>
    setForm({ ...form, [name]: value });

  return (
    <ImageBackground
      source={{
        uri: P_DATA + "instalaciones/Árbol.png",
      }}
      resizeMode={"cover"}
      style={styles.container}
    >
      {errro.map((value, index) => {
        return <AlertComponent label={value} type={"warning"} key={index} />;
      })}

      <View style={styles.content}>
        <InputComponent
          placeholder="Correo electrónico"
          keyboardType={"email-address"}
          icon="mail"
          value={form.email}
          onChangeText={(text: string) => handleChange("email", text)}
          colorText={"grayT0_3"}
          colorIcon={"primaryR"}
        />

        <InputComponent
          placeholder="Clave de usuario"
          keyboardType={"numeric"}
          icon="key"
          value={form.clave}
          onChangeText={(text: string) => handleChange("clave", text)}
          colorText={"grayT0_3"}
          colorIcon={"primaryR"}
        />

        {/*<InputComponent
        placeholder="Contraseña"
        keyboardType={"default"}
        icon="lock1"
        value={form.pass}
        onChangeText={(text: string) => handleChange("pass", text)}
    />*/}

        <ButtomComponent
          onPress={() => onClickListener()}
          type={"primaryR"}
          size={"large"}
          label={"Enviar"}
          rounded={"midiun"}
          disabled={disable}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    width: "90%",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default LoginScreen;
