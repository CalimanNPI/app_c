import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import { instalaciones } from "../../components/util/data";
import Layout from "../../components/Layout";
import ButtonBackComponent from "../../components/ButtomBackComponent";

const InstalacioneDesc = ({ route, navigation }: any) => {
  const [images, setImages] = useState({});
  const [actividad, setActividad] = useState({});

  const data = () => {
    instalaciones.forEach((element) => {
      if (element.id == route.params.id) {
        setImages(element.image);
        setActividad(element);
      }
    });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <Layout>
      <ButtonBackComponent
        onPress={() => navigation.popToTop()}
        icon={"left"}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageContent}
          onPress={() => navigation.push("InstalacionModal", images)}
        >
          <Image
            source={{ uri: images[1] }}
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
          />
          <View style={styles.overlayContent}>
            <View style={styles.overlayText}>
              <Text style={styles.count}>1/{images.length}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.postContent}>
          <Text
            style={[
              FONTS.title,
              { fontSize: 26, marginLeft: 0, marginBottom: 10 },
            ]}
          >
            {actividad.title}
          </Text>

          <Text style={FONTS.desc}>{actividad.description}</Text>

          <Text style={[FONTS.body, { color: COLORS.primaryR, marginTop: 10 }]}>
            {actividad.comment}
          </Text>

          <Text style={[FONTS.desc, { marginTop: 10 }]}>{actividad.time}</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.white,
  },
  imageContent: { width: "100%", height: 200 },
  overlayContent: {
    flex: 1,
    position: "absolute",
    zIndex: 100,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  count: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: "SpaceMono_700Bold",
    textShadowColor: COLORS.gray,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  postContent: {
    flex: 1,
    padding: 30,
  },
});

export default InstalacioneDesc;
