import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import MapView, { Marker, Polygon } from "react-native-maps";
import { openURL } from "expo-linking";
import * as MailComposer from "expo-mail-composer";

import Layout from "../components/Layout";
import BackgroundSvg from "../components/BackgroundSvg";
//import MapViewDirections from "react-native-maps-directions";
//import { GOOGLE_MAPS_KEY } from "@env";

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
      <BackgroundSvg style={styles.containerSVG} />
      <View
        style={[
          styles.containerMap,
          {
            paddingHorizontal: 20,
            paddingVertical: 20,
            top: -10,
            height: Dimensions.get("window").height / 5,
          },
        ]}
      >
        <Text style={styles.textTitle}>Contacto</Text>
        <Text style={styles.textText}>
          Esta clave no tiene restricciones. A fin de evitar el uso no
          autorizado.
        </Text>
        {/* <ButtonGradient
          textButton={"Enviar Mensaje"}
          onPress={_handleOpenMessenger}
      />*/}
      </View>

      <View
        style={[
          styles.containerMap,
          {
            paddingHorizontal: 20,
            paddingVertical: 20,
            zIndex: 1,
          },
        ]}
      >
        <View style={styles.containerText}>
          <FontAwesome
            name="phone"
            style={[styles.icons, { marginHorizontal: 10 }]}
          />
          <Text style={styles.textText}>5591830100 ext. 602.</Text>
        </View>

        <TouchableOpacity style={styles.containerText} onPress={showAlet}>
          <FontAwesome
            name="at"
            style={[styles.icons, { marginHorizontal: 10 }]}
          />
          <Text style={styles.textText}>contacto@cdcac.com</Text>
        </TouchableOpacity>

        <View style={styles.containerIcons}>
          <TouchableOpacity onPress={_handleOpenFacebook}>
            <FontAwesome name="facebook" style={styles.icons} />
          </TouchableOpacity>

          <TouchableOpacity onPress={_handleOpenYoutube}>
            <FontAwesome name="youtube-play" style={styles.icons} />
          </TouchableOpacity>

          <TouchableOpacity onPress={_handleOpenInstagram}>
            <FontAwesome name="instagram" style={styles.icons} />
          </TouchableOpacity>

          <TouchableOpacity onPress={_handleOpenMessenger}>
            <FontAwesome5 name="facebook-messenger" style={styles.icons} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          styles.containerMap,
          { bottom: 0, zIndex: 1, marginBottom: 5 },
        ]}
      >
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
      <BackgroundSvg style={styles.containerSVG} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerMap: {
    width: "90%",
    height: Dimensions.get("window").height / 4,
    backgroundColor: "#F2F2F7",
    shadowColor: "#242426",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 10,
    borderRadius: 10,
    marginTop: 20,
    position: "absolute",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  containerIcons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: 10,
  },
  icons: {
    color: "#FF3B30",
    fontSize: 30,
    marginHorizontal: 20,
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  containerSVG: {
    width: Dimensions.get("window").width,
    justifyContent: "flex-start",
    alignContent: "center",
    position: "absolute",
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "left",
  },
  textText: {
    fontFamily: "SpaceMono_400Regular",
    color: "#8E8E93",
    fontSize: 14,
    textAlign: "justify",
  },
});

export default LocationScreen;
