import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import MapView, { Marker, Polygon } from "react-native-maps";
import { openURL } from "expo-linking";
import * as MailComposer from "expo-mail-composer";

import Layout from "../../components/Layout";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import CenterTopSvgComponent from "../../components/svg/ButtomNew";
import TopSvgComponent from "../../components/svg/TopSVG";
import TitleComponent from "../../components/TextTitleComponent";
import CardComponent from "../../components/CardComponent";
//import MapViewDirections from "react-native-maps-directions";
//import { GOOGLE_MAPS_KEY } from "@env";
const { width, height } = Dimensions.get("window");

const LocationScreen = () => {
  const [status, setStatus] = useState<string>();
  const [origin, setOrigin] = useState({
    latitude: 19.361687934069835,
    longitude: -99.16218744590878,
  });

  const [destination, setDestination] = useState({
    latitude: 19.36169157278851,
    longitude: -99.16182663558192,
  });

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setOrigin(current);
  };

  useEffect(() => {
    getLocationPermission();
  }, []);

  const Onregion = (region: any) => {
    console.log(region);
  };

  const _handleOpenMessenger = () => {
    openURL(
      "https://code.tutsplus.com/es/tutorials/get-started-with-layouts-in-react-native--cms-27418"
    );
  };
  const _handleOpenFacebook = () => {
    openURL("https://www.facebook.com/CentroDeportivoCoyoacanAc");
  };
  const _handleOpenInstagram = () => {
    openURL("https://www.instagram.com/centrodeportivocoyoacan/");
  };
  const _handleOpenYoutube = () => {
    openURL("https://www.youtube.com/user/cdcacOficial");
  };

  const showAlet = (option: any) => {
    Alert.alert("Alerta", "¿Quieres enviar un correo electrónico?", [
      {
        text: "No",
        style: "cancel",
      },
      { text: "Si", style: "default", onPress: sendEmail },
    ]);
  };

  const sendEmail = () => {
    let options = {
      subject: "Sending email with attachment",
      recipients: ["carlos.cdms.c@gmail.com"],
      body: "Enter email body here ...",
    };

    let promise = new Promise((resolve, reject) => {
      MailComposer.composeAsync(options)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });

    promise.then(
      (result: any) => setStatus("Status: email " + result.status),
      (error: any) => setStatus("Status: email " + error.status)
    );
  };

  return (
    <Layout>
      {/* <BackgroundSvg style={styles.containerSVG} />*/}

      {/* <View style={[styles.card, { height: 120 }]}>
          <Text style={[FONTS.title, { color: COLORS.gray }]}>Contacto</Text>
          <Text style={[FONTS.body, { color: COLORS.gray }]}>
            Esta clave no tiene restricciones. A fin de evitar el uso no
            autorizado.
          </Text>
  </View>*/}
      <TitleComponent text={"Contactanos"} />
      <CardComponent
        children={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "column" }}>
              <View style={styles.containerText}>
                <AntDesign name="phone" style={styles.icons} />
                <Text style={[FONTS.body, { color: COLORS.gray }]}>
                  5591830100 ext. 602.
                </Text>
              </View>
              <TouchableOpacity style={styles.containerText} onPress={showAlet}>
                <AntDesign name="mail" style={styles.icons} />
                <Text style={[FONTS.body, { color: COLORS.gray }]}>
                  contacto@cdcac.com
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerText}
                onPress={_handleOpenMessenger}
              >
                <AntDesign name="message1" style={styles.icons} />
                <Text style={[FONTS.body, { color: COLORS.gray }]}>
                  Messenger
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
                resizeMode={"cover"}
              />
            </View>
          </View>
        }
      />

      <View style={styles.cardMap}>
        <MapView
          initialRegion={{
            latitude: 19.361687934069835,
            longitude: -99.16218744590878,
            latitudeDelta: 0.004245888672006259,
            longitudeDelta: 0.004877261817441081,
          }}
          showsUserLocation={true}
          style={styles.map}
          //onRegionChange={Onregion}
        >
          {/*<Marker
            coordinate={origin}
            draggable
            onDragEnd={(direction) =>
              setOrigin(direction.nativeEvent.coordinate)
            }
          />*/}
          <Marker
            coordinate={destination}
            draggable
            onDragEnd={(direction) =>
              setOrigin(direction.nativeEvent.coordinate)
            }
          />
          {/*<MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_KEY}
            strokeColor="red"
            strokeWidth={5}
          />/*}

       { /**   <Polygon
            coordinates={[origin, destination]}
            strokeColor={"#FF3B30"}
            strokeWidth={8}
          />*/}
        </MapView>
      </View>

      <View style={styles.contentSize}>
        <TouchableOpacity onPress={_handleOpenFacebook} style={styles.btnSize}>
          <Feather name="facebook" size={25} color={COLORS.primaryR} />
        </TouchableOpacity>

        <TouchableOpacity onPress={_handleOpenYoutube} style={styles.btnSize}>
          <Feather name="youtube" size={25} color={COLORS.primaryR} />
        </TouchableOpacity>

        <TouchableOpacity onPress={_handleOpenInstagram} style={styles.btnSize}>
          <AntDesign name="instagram" size={25} color={COLORS.primaryR} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 160,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icons: {
    color: COLORS.primaryR,
    fontSize: 30,
    marginHorizontal: 20,
  },
  cardMap: {
    width,
    height: 300,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  map: {
    width: "95%",
    height: "95%",
  },

  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
  },

  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: COLORS.grayT0_3,
    borderWidth: 1,
    marginHorizontal: 10,
    backgroundColor: COLORS.white,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationScreen;
