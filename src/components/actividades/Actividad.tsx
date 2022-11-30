import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { P_DATA } from "@env";

import Layout from "../Layout";
import { getActividad } from "../../api/api";
import ImageZoom from "../ImageZoom";
import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";

import Profesor from "./Profesores";

const Actividades = ({ route }: any) => {
  const [actividad, setActividad] = useState([]);

  const onLoadData = async () => {
    const data = await getActividad(route.params.id);
    setActividad(data.data);
    console.log(actividad);
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout>
        <View style={styles.imageContent}>
          <ImageZoom image={P_DATA + "instalaciones/Tatami.jpg"} />
        </View>

        {actividad.map((value: any, index) => (
          <View key={index}>
            <View style={styles.card}>
              <View style={styles.titleContent}>
                <Text style={[FONTS.title, { color: COLORS.primaryB }]}>
                  {value.actividad.trim()}
                </Text>
                <AntDesign
                  name="codesquareo"
                  size={30}
                  color={COLORS.primaryB}
                />
              </View>
              <View style={styles.content}>
                <Feather name="map-pin" size={20} color={COLORS.primaryB} />
                <Text
                  style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}
                >
                  {value.ubicacion.trim()}
                </Text>
              </View>
              <View style={styles.content}>
                <Feather name="activity" size={20} color={COLORS.primaryB} />
                <Text
                  style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}
                >
                  {value.niveles.trim()}
                </Text>
              </View>
              <View style={styles.content}>
                <Feather name="user" size={20} color={COLORS.primaryB} />
                <Text
                  style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}
                >
                  {value.edad.trim()}
                </Text>
              </View>
              <View style={styles.content}>
                <Feather name="calendar" size={20} color={COLORS.primaryB} />
                <Text
                  style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}
                >
                  {value.fecha.trim()}
                </Text>
              </View>
              <View style={styles.content}>
                <Feather name="clock" size={20} color={COLORS.primaryB} />
                <Text
                  style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}
                >
                  {value.horini.trim() + " - " + value.horfin.trim()}
                </Text>
              </View>

              <View style={styles.priceContent}>
                <View style={[styles.titleContent]}>
                  <Text style={FONTS.body}>PRECIO POR MES:</Text>
                  <Text style={[FONTS.subTitle, { color: COLORS.primaryB }]}>
                    <Feather
                      name="dollar-sign"
                      size={20}
                      color={COLORS.primaryB}
                    />
                    {value.precio.trim()}
                  </Text>
                </View>
                <View style={[styles.titleContent]}>
                  <Text style={FONTS.body}>PRECIO POR DÍA:</Text>
                  <Text style={[FONTS.subTitle, { color: COLORS.primaryB }]}>
                    <Feather
                      name="dollar-sign"
                      size={20}
                      color={COLORS.primaryB}
                    />
                    {value.dia.trim()}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={[FONTS.title]}>Actividad</Text>
            </View>

            <View style={styles.cardDesc}>
              <View style={styles.cardContent}>
                <Text style={[FONTS.desc]}>
                  {value.descripActi}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  non vitae quis facere illo numquam, quos quam repellendus
                  voluptatibus inventore beatae, ab sequi optio ea dicta eos
                  amet! Id, beatae.
                </Text>
              </View>
            </View>

            <Profesor nom={value.profesor} clave={value.clave} />
          </View>
        ))}
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContent: { width: "100%", height: 250 },
  cardContent: {
    margin: 20,
    flexDirection: "row",
  },
  cardDesc: {
    marginHorizontal: 10,
    marginVertical: 20,
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  card: {
    width: "90%",
    marginHorizontal: 20,
    padding: 20,
    flexDirection: "column",
    borderRadius: 30,
    backgroundColor: COLORS.white,
    position: "relative",
    top: -20,
    zIndex: 2,
  },
  titleContent: { flexDirection: "row", justifyContent: "space-between" },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  tagsContent: {
    marginTop: 150,
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: COLORS.primaryB,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  priceContent: {
    borderColor: COLORS.primaryB,
    borderTopWidth: 2,
    marginTop: 10,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default Actividades;
