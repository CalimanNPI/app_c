import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";
import {
  getNombre,
  getMail,
  getImg,
  logout,
  getUsuarioAuth,
} from "../../api/auth";
import { P_DATA } from "@env";

const DrawerContent = (props: any) => {
  const navigation = useNavigation();

  const [isLogged, setIsLogged] = useState<boolean>();

  const loadPerfil = async () => {
    const data = await getUsuarioAuth();
    //console.log(data, "loadPerfil");
    setIsLogged(data);
    setFoto(await getImg());
    setMail(await getMail());
    setNombre(await getNombre());
  };

  const [nombre, setNombre] = useState<string>();
  const [mail, setMail] = useState<string>();
  const [foto, setFoto] = useState<string>();

  const load = async () => {
    setInterval(() => {
      loadPerfil();
    }, 4000);
  };

  useEffect(() => {
    //console.log(isLogged);
    load();
  }, []);

  const createLogoutAlert = () => {
    Alert.alert("Cerrar sessión", "Si deseas salir?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: createLogout },
    ]);
  };

  const createLogout = async () => {
    const data = await logout();

    if (data) {
      navigation.navigate("LoginScreen");
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.white }}
      >
        <TouchableOpacity
          onPress={() => {
            isLogged
              ? navigation.navigate("PerfilScreen")
              : navigation.navigate("LoginScreen");
          }}
        >
          <ImageBackground
            source={{
              uri: P_DATA + "img/fondo.jpg",
            }}
            style={{ padding: 20 }}
            resizeMode="cover"
          >
            <Image
              source={{
                uri: foto,
              }}
              resizeMode={"cover"}
              style={styles.avatar}
            />
            <Text
              style={[
                FONTS.subTitle,
                {
                  marginBottom: 5,
                  color: COLORS.white,
                },
              ]}
            >
              {nombre}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[FONTS.desc, { color: COLORS.white }]}>{mail}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: 10 }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{ padding: 20, borderTopWidth: 1, borderTopColor: COLORS.gray }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notifications");
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="bell" size={20} color={COLORS.gray} />
            <Text style={[FONTS.body, { marginLeft: 5 }]}>Notificaciones</Text>
          </View>
        </TouchableOpacity>
        {isLogged && (
          <TouchableOpacity
            onPress={createLogoutAlert}
            style={{ paddingVertical: 15 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="log-out" size={20} color={COLORS.gray} />
              <Text style={[FONTS.body, { marginLeft: 5 }]}>Salir</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
