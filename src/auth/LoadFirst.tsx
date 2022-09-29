import AsyncStorage from "@react-native-async-storage/async-storage";
import RegisterPushNotifications from "./RegisterPushNotifications";
//import LoadFonts from "./fonst";

const isAppFirstLaunchedC = async () => {
  const data = await AsyncStorage.getItem("@isAppFirstLaunched");
  //console.log(data + " data");
  //LoadFonts();

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
