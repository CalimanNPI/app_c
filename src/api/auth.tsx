import axios from "axios";
import { API } from "@env";

const setLogin = async (fields: any) => {
  const token = 23131;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  await axios.postForm(API + "/login/logout", fields, config).then((response) => {
    console.log(response.data);
  });
};

export { setLogin };
