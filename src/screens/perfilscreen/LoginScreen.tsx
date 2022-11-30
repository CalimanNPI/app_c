import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import InputComponent from "../../components/InputComponent";
import ButtomComponent from "../../components/ButtomComponent";
import AlertComponent from "../../components/AlertComponent";

import { login, setTokenAuth, setUsuarioAuth } from "../../api/auth";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({ clave: "", email: "", pass: "" });
  const [errro, setErrro] = useState([]);

  const onClickListener = async () => {
    const data = await login(form);

    console.log(data.data);
    if (data.data.token) {
      setErrro([]);
      setTokenAuth(form.clave, data.data.token);
      setUsuarioAuth(data.data);
      setForm({ clave: "", email: "", pass: "" });
      navigation.navigate("PerfilScreen");
    }

    if (data.data.error) {
      setErrro(data.data.error);
    }
  };

  const handleChange = (name: any, value: any) =>
    setForm({ ...form, [name]: value });

  return (
    <ImageBackground
      source={{
        uri: "http://192.168.1.243/api_cdc/public/instalaciones/Árbol.png",
      }}
      resizeMode={"cover"}
      style={styles.container}
    >
      {errro.map((value) => {
        return <AlertComponent label={value} type={"warning"} />;
      })}

      <InputComponent
        placeholder="Correo electrónico"
        keyboardType={"default"}
        icon="mail"
        value={form.email}
        onChangeText={(text: string) => handleChange("email", text)}
      />

      <InputComponent
        placeholder="Clave de usuario"
        keyboardType={"default"}
        icon="key"
        value={form.clave}
        onChangeText={(text: string) => handleChange("clave", text)}
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
      />

      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
