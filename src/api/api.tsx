import axios from "axios";
import { API } from "@env";

/**publicidad */
const getPublicity = async () => {
  const data = await axios.get(API + "/publicity");
  return data;
};

const getPublicityDesc = async (id: string) => {
  const data = await axios.get(API + "/publicity/" + id);
  return data;
};

/**notificación */
const getNotify = async () => {
  const data = await axios.get(API + "/notify");
  return data;
};

const getNotifyDesc = async (id: string) => {
  const data = await axios.get(API + "/notify/" + id);
  return data;
};

/**token  notificación*/
const setToken = async (token: string) => {
  var fields = { token: token };

  await axios.postForm(API + "/token/", fields).then((response) => {
    //console.log(response.data);
  });
};

/**send mensaje */
const sendEmail = async (fields: any) => {
  const data = await axios.postForm(API + "/sendEmail/", fields);
  return data.data;
};

/**actividades */
const getActividades = async () => {
  const data = await axios.get(API + "/acti");
  return data;
};

const getActividad = async (id) => {
  const data = await axios.get(API + "/acti/" + id);
  return data;
};

const searchActi = async (searchInput: any) => {
  const data = await axios.postForm(API + "/acti/search", searchInput);
  return data;
};

export {
  getPublicity,
  getPublicityDesc,
  getNotify,
  getNotifyDesc,
  setToken,
  sendEmail,
  getActividades,
  getActividad,
  searchActi
};
