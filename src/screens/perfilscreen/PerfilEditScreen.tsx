import React, { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import {
  getUsuarioInfo,
  getClave,
  getMail,
  getStatus,
  getToken,
  getPhone,
  updateInfoUsuario,
} from "../../api/auth";

import InputComponent from "../../components/InputComponent";
import ButtomComponent from "../../components/ButtomComponent";
import AlertComponent from "../../components/AlertComponent";

const FormUpdate = () => {
  const [disable, setDisable] = useState<boolean>(false);
  const [fields, setFields] = useState({
    clave: "",
    email: "",
    phone: "",
    rfc: "",
    curp: "",
    tipo: "",
    token: "",
  });
  const [errro, setErrro] = useState([]);

  const handleChange = (name: string, value: string) => {
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = () => {
    Alert.alert("Actualizar", "Deseas actualizar tú información?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: update },
    ]);
  };

  const update = async () => {
    setErrro([]);
    setDisable(true);
    const data = await updateInfoUsuario(fields);

    if (data.error) {
      setErrro(data.error);
    }

    //console.log(data.message);
    if (data.message) {
      Alert.alert("Bien!!", data.message);
    }
    setDisable(false);
  };

  const tipoSS = async () => {
    const data = await getUsuarioInfo();

    fields.token = await getToken();
    fields.tipo = await getStatus();
    fields.clave = await getClave();
    fields.phone = await getPhone();
    fields.email = await getMail();
    fields.curp = data.usuario[0]["curp"];

    if (fields.tipo == "X") {
      fields.rfc = data.usuario[0]["rfc"];
    }
  };

  useEffect(() => {
    tipoSS();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 15,
      }}
    >
      {errro.map((value, index) => {
        return <AlertComponent label={value} type={"warning"} key={index} />;
      })}

      <InputComponent
        placeholder="Correo electrónico"
        keyboardType={"email-address"}
        icon="mail"
        value={fields.email}
        onChangeText={(text: string) => handleChange("email", text)}
        colorText={"grayT0_3"}
        colorIcon={"primaryR"}
      />

      <InputComponent
        placeholder="Teléfono celular"
        keyboardType={"numeric"}
        icon="phone"
        value={fields.phone}
        onChangeText={(text: string) => handleChange("phone", text)}
        colorText={"grayT0_3"}
        colorIcon={"primaryR"}
      />

      {fields.tipo == "X" && (
        <InputComponent
          placeholder="RFC"
          keyboardType={"default"}
          icon="filetext1"
          value={fields.rfc}
          onChangeText={(text: string) => handleChange("rfc", text)}
          colorText={"grayT0_3"}
          colorIcon={"primaryR"}
        />
      )}

      <InputComponent
        placeholder="CURP"
        keyboardType={"default"}
        icon="filetext1"
        value={fields.curp}
        onChangeText={(text: string) => handleChange("curp", text)}
        colorText={"grayT0_3"}
        colorIcon={"primaryR"}
      />

      <ButtomComponent
        onPress={handleSubmit}
        type={"primaryR"}
        size={"small"}
        label={"Actualizar"}
        disabled={disable}
      />
    </View>
  );
};

export default FormUpdate;
