import axios from "axios";
import { API } from "@env";

const getPublicity = async () => {
  const data = await axios.get(API + "/publicity");
  return data;
};

const getPublicityDesc = async (id: string) => {
  const data = await axios.get(API + "/publicity/" + id);
  return data;
};

const getNotify = async () => {
  const data = await axios.get(API + "/notify");
  return data;
};

const getNotifyDesc = async (id: string) => {
  const data = await axios.get(API + "/notify/" + id);
  return data;
};

const setToken = async (token: string) => {
  var fields = { token: token };

  await axios.postForm(API + "/token/", fields).then((response) => {
    //console.log(response.data);
  });
};

const sendEmail = async (fields: any) => {
  const data = await axios.postForm(API + "/sendEmail/", fields);
  return data.data;
};

const setNotify = async () => {
  var fields = {
    title: "Super promoción new",
    body: "Chuleta de cerdo 50% de descuento",
    desc: "🤣🤣😎😎😢 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    n_type: "EVENTO",
    iconName: API + "/api_cdc/public/img/Inicio-1.png",
  };
  await axios.postForm(API + "/api_cdc/notify/", fields).then((response) => {
    console.log(response.data);
  });
};

const setActividad = async () => {
  var fields = {
    title: "Tenis",
    body: "🤣🤣😎😎😢 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    image: API + "/api_cdc/public/img/Inicio-1.png",
    icon: API + "/api_cdc/public/img/Inicio-1.png",
    level: "05 - 08 años",
    location: "canchas de tenis",
    maxPerson: 30,
    persons: 15,
    priceMonth: 453.0,
    priceClass: 81.0,
    benefit: [
      {
        id: 1,
        title: "Lechuga1",
        icon: API + "/api_cdc/public/img/Inicio-1.png",
      },
      {
        id: 1,
        title: "Lechuga2",
        icon: API + "/api_cdc/public/img/Inicio-1.png",
      },
      {
        id: 1,
        title: "Lechuga3",
        icon: API + "/api_cdc/public/img/Inicio-1.png",
      },
    ],
    horario: [
      {
        id: 1,
        day: "Lunes",
        start: "16:00pm",
        then: "16:55pm",
      },
      {
        id: 1,
        day: "Martes",
        start: "16:00pm",
        then: "16:55pm",
      },
      {
        id: 1,
        day: "Jueves",
        start: "16:00pm",
        then: "16:55pm",
      },
      {
        id: 1,
        day: "Miercoles",
        start: "16:00pm",
        then: "16:55pm",
      },
    ],
  };
  await axios.postForm(API + "/api_cdc/actividad/", fields).then((response) => {
    console.log(response.data);
  });
};

const setPublicity = async () => {
  var fields = {
    title: "Title",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.`,
    uriImg: API + "/api_cdc/public/img/1.jpg",
    date: new Date(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
  };
  await axios.postForm(API + "/api_cdc/publicity/", fields).then((response) => {
    console.log(response.data);
  });
};

const getTOken = async () => {
  await axios.get(API + "/api_cdc/notify/62c9c0c10b0d2").then((response) => {
    console.log(response.data[0].body);
  });
};

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
  setNotify,
  setPublicity,
  setActividad,
  getActividades,
  getActividad,
  searchActi
};
