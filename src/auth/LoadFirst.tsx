import AsyncStorage from "@react-native-async-storage/async-storage";
import RegisterPushNotifications from "./RegisterPushNotifications";

const isAppFirstLaunchedC = async () => {
  const data = await AsyncStorage.getItem("@isAppFirstLaunched");
  

  if (data) {
    //console.log("false 1 ");
    return false;
  } else {
    await AsyncStorage.setItem("@isAppFirstLaunched", JSON.stringify(false));
    RegisterPushNotifications();
    //console.log("true 1");
    return true;
  }
};

export default isAppFirstLaunchedC;
