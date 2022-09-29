import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";
import * as Notifications from "expo-notifications";

import IndexNavigate from "./src/components/navigations/IndexNavigate";

import ModalViewDesc from "./src/components/notifications/ModalViewDesc";
import { getNotifyDesc } from "./src/api/api";

const App = () => {
  const [notification, setNotification] = useState([]);
  const [descNotification, setDescNotification] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [icon, setIcon] = useState(null);

  const [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  });

  const _handleNotification = (notification: any) => {
    setNotification(notification);
  };

  const _handleNotificationResponse = async (response: any) => {
    //console.log(response.notification.request.content.data._id);
    const id = response.notification.request.content.data._id;
    const data = await getNotifyDesc(id);
    setDescNotification(data.data);

    setIcon(data.data[0]["iconName"]);
    setDesc(data.data[0]["desc"]);
    setTitle(data.data[0]["title"]);
    setModalVisible(true);
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    Notifications.addNotificationReceivedListener(_handleNotification);
    Notifications.addNotificationResponseReceivedListener(
      _handleNotificationResponse
    );
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <IndexNavigate />

      <ModalViewDesc
        title={title}
        desc={desc}
        imageUri={icon}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </GestureHandlerRootView>
  );
};

export default App;
