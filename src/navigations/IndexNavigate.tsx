import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import BottomNavigate from "./BottomNavigate";
import DrawerNavigate from "./DrawerNavigate";
import OnboardingScreen from "../screens/OnboardingScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import isAppFirstLaunchedC from "../auth/LoadFirst";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";
import * as Notifications from "expo-notifications";

import ModalViewDesc from "../components/ModalDescView";
import { getNotifyDesc } from "../api/api";

const Stack = createStackNavigator();

export default function IndexNavigate() {

  const [notification, setNotification] = useState([]);
  const [descNotification, setDescNotification] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [icon, setIcon] = useState(null);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(
    null
  );

  const getData = async () => {
    const isData = await isAppFirstLaunchedC();
    setIsAppFirstLaunched(isData);
  };

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
    getData();
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
    isAppFirstLaunched != null && (
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
              {isAppFirstLaunched && (
                <Stack.Screen
                  name="OnboardingScreen"
                  component={OnboardingScreen}
                />
              )}
              <Stack.Screen name="DrawerNavigate" component={DrawerNavigate} />
              
            </Stack.Group>

          
          </Stack.Navigator>
        </NavigationContainer>
        <ModalViewDesc
          title={title}
          desc={desc}
          imageUri={icon}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </GestureHandlerRootView>
    )
  );
}
