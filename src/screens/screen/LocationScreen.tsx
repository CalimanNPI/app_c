import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import MapView, { Marker, Polygon } from "react-native-maps";
import { openURL } from "expo-linking";
import * as MailComposer from "expo-mail-composer";

import Layout from "../../components/Layout";
import BackgroundSvg from "../../components/BackgroundSvg";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
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
      <View style={styles.container}>
        {/* <BackgroundSvg style={styles.containerSVG} />*/}

        <View style={[styles.card, { height: 120 }]}>
          <Text style={[FONTS.title, { color: COLORS.gray }]}>Contacto</Text>
          <Text style={[FONTS.body, { color: COLORS.gray }]}>
            Esta clave no tiene restricciones. A fin de evitar el uso no
            autorizado.
          </Text>
        </View>

        <View style={styles.card}>
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

          <View style={styles.containerIcons}>
            <TouchableOpacity onPress={_handleOpenFacebook}>
              <Feather name="facebook" style={styles.icons} />
            </TouchableOpacity>

            <TouchableOpacity onPress={_handleOpenYoutube}>
              <Feather name="youtube" style={styles.icons} />
            </TouchableOpacity>

            <TouchableOpacity onPress={_handleOpenInstagram}>
              <AntDesign name="instagram" style={styles.icons} />
            </TouchableOpacity>

            <TouchableOpacity onPress={_handleOpenMessenger}>
              <AntDesign name="message1" style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardMap}>
          <MapView
            initialRegion={{
              latitude: 19.361687934069835,
              longitude: -99.16218744590878,
              latitudeDelta: 0.004245888672006259,
              longitudeDelta: 0.004877261817441081,
            }}
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
        {/* <BackgroundSvg style={styles.containerSVG} />*/}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: 160,
    padding: 20,
    marginTop: 20,
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
  containerIcons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: 10,
  },
  icons: {
    color: COLORS.primaryR,
    fontSize: 30,
    marginHorizontal: 20,
  },
  cardMap: {
    width,
    height: 260,
    marginTop: 20,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  containerSVG: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    justifyContent: "flex-start",
    alignContent: "center",
  },
});

export default LocationScreen;
