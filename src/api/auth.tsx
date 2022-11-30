import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API, FOTO } from "@env";

const login = async (fields: any) => {
  const token = 23131;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.postForm(API + "/login", fields);
  //console.log(data);
  return data;
};

const logout = async () => {
  const token = 12; //await getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const fields = { token: await getToken(), clave: await getClave() };

  const data = await axios.postForm(API + "/logout", fields);
  console.log(data.data, "logout");

  if (data.data) {
    const keys = [
      "@usuario",
      "@mail",
      "@clave",
      "@nombre",
      "@status",
      "@" + (await getClave()),
    ];
    await AsyncStorage.multiRemove(keys);
    return data.data;
  }
  return false;
};

const setTokenAuth = async (clave: string, token: string) => {
  const data = await AsyncStorage.getItem("@" + clave);
  //console.log(data);
  if (data) {
    //console.log("exist");
    return false;
  } else {
    await AsyncStorage.setItem("@" + clave, JSON.stringify(token));
    //console.log("save");
    return true;
  }
};

const setUsuarioAuth = async (usuario: any) => {
  await AsyncStorage.setItem("@usuario", JSON.stringify(usuario));
  //console.log("save");
  //await getUsuarioInfo();
  return true;
};

const getUsuarioAuth = async () => {
  const data = await AsyncStorage.getItem("@usuario");
  //console.log(!!data);
  return !!data;
};

const getUsuarioInfo = async () => {
  const data = await AsyncStorage.getItem("@usuario");
  //console.log(data != null ? JSON.parse(data) : "");
  const usuario = data != null ? JSON.parse(data) : "";
  console.log(JSON.stringify(usuario));
  await AsyncStorage.setItem("@mail", JSON.stringify(usuario.info[0]["mail"]));
  await AsyncStorage.setItem(
    "@clave",
    JSON.stringify(usuario.info[0]["clave"])
  );
  await AsyncStorage.setItem(
    "@nombre",
    JSON.stringify(usuario.usuario[0]["nombre"])
  );

  await AsyncStorage.setItem("@status", JSON.stringify(usuario.status));

  //console.log(await getStatus());
  return usuario;
};

const getImg = async () => {
  return (await getClave()) != ""
    ? FOTO + (await getClave()) + ".JPG"
    : "https://bootdey.com/img/Content/avatar/avatar6.png";
};

const getClave = async () => {
  const clave = await AsyncStorage.getItem("@clave");
  return clave != null ? JSON.parse(clave) : "";
};

const getMail = async () => {
  const mail = await AsyncStorage.getItem("@mail");
  //console.log(mail != null ? JSON.parse(mail) : "contacto@cdcac.com");
  return mail != null ? JSON.parse(mail) : "contacto@cdcac.com";
};

const getNombre = async () => {
  const nombre = await AsyncStorage.getItem("@nombre");
  return nombre != null ? JSON.parse(nombre) : "Usuario";
};

const getStatus = async () => {
  const status = await AsyncStorage.getItem("@status");
  return status != null ? JSON.parse(status) : "Usuario";
};

const getToken = async () => {
  const token = await AsyncStorage.getItem("@" + (await getClave()));
  return token != null ? JSON.parse(token) : "159357";
};

const getProfFoto = async (clave: number) => {
  return FOTO + clave + ".JPG";
};

const getProf = async (clave: any) => {
  const fields = {
    clave,
  };
  const data = await axios.postForm(API + "/acti/prof", fields);
  console.log(data.data);
  return data.data;
};

export {
  login,
  logout,
  setTokenAuth,
  setUsuarioAuth,
  getUsuarioAuth,
  getUsuarioInfo,
  getClave,
  getImg,
  getMail,
  getNombre,
  getStatus,
  getToken,
  getProfFoto,
  getProf,
};
