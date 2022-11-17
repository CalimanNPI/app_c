import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { P_DATA } from "@env";

import Layout from "../Layout";
import { getActividad } from "../../api/api";
import ImageZoom from "../ImageZoom";
import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";

const Actividades = ({ route }: any) => {
  const [actividad, setActividad] = useState([]);

  const onLoadData = async () => {
    const data = await getActividad(route.params.id);
    setActividad(data.data);
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
          <View style={styles.card} key={index}>
            <View style={styles.titleContent}>
              <Text style={[FONTS.title, { color: COLORS.primaryB }]}>
                {value.actividad.trim()}
              </Text>
              <AntDesign name="codesquareo" size={30} color={COLORS.primaryB} />
            </View>
            <View style={styles.content}>
              <Feather name="map-pin" size={24} color={COLORS.primaryB} />
              <Text style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}>
                {value.ubicacion.trim()}
              </Text>
            </View>
            <View style={styles.content}>
              <Feather name="activity" size={20} color={COLORS.primaryB} />
              <Text style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}>
                {value.niveles.trim()}
              </Text>
            </View>
            <View style={styles.content}>
              <Feather name="user" size={20} color={COLORS.primaryB} />
              <Text style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}>
                {value.edad.trim()}
              </Text>
            </View>
            <View style={styles.content}>
              <Feather name="calendar" size={24} color={COLORS.primaryB} />
              <Text style={[FONTS.body, { color: COLORS.gray, marginLeft: 5 }]}>
                {value.fecha.trim()}
              </Text>
            </View>
          </View>
        ))}

        <View style={[styles.cardContent, styles.tagsContent]}>
          <View style={styles.btnColor}>
            <Feather name="info" size={24} color={COLORS.white} />
            <Text
              style={[FONTS.subTitle, { color: COLORS.white, marginLeft: 10 }]}
            >
              Coordinación
            </Text>
          </View>
          <View style={styles.btnColor}>
            <Feather name="info" size={24} color={COLORS.white} />
            <Text
              style={[FONTS.subTitle, { color: COLORS.white, marginLeft: 10 }]}
            >
              Agilidad
            </Text>
          </View>
          <View style={styles.btnColor}>
            <Feather name="info" size={24} color={COLORS.white} />
            <Text
              style={[FONTS.subTitle, { color: COLORS.white, marginLeft: 10 }]}
            >
              Equilibrio
            </Text>
          </View>
          <View style={styles.btnColor}>
            <Feather name="info" size={24} color={COLORS.white} />
            <Text
              style={[FONTS.subTitle, { color: COLORS.white, marginLeft: 10 }]}
            >
              Reduce el estrés
            </Text>
          </View>
          <View style={styles.btnColor}>
            <Feather name="info" size={24} color={COLORS.white} />
            <Text
              style={[FONTS.subTitle, { color: COLORS.white, marginLeft: 10 }]}
            >
              Flexibilidad
            </Text>
          </View>
        </View>

        <View style={styles.textContent}>
          <Text style={[FONTS.title]}>Actividad</Text>
        </View>

        <View style={styles.cardDesc}>
          <View style={styles.cardContent}>
            <Text style={[FONTS.desc]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non
              vitae quis facere illo numquam, quos quam repellendus voluptatibus
              inventore beatae, ab sequi optio ea dicta eos amet! Id, beatae.
            </Text>
          </View>
        </View>
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
    position: "absolute",
    top: 170,
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
});

export default Actividades;
