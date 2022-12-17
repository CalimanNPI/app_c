import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { P_DATA } from "@env";

import Layout from "../../components/Layout";
import { getActividad } from "../../api/api";
import ImageZoom from "../../components/ImageZoom";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";

import Profesor from "./Profesores";
import ButtonBackComponent from "../../components/ButtomBackComponent";
import TitleComponent from "../../components/TextTitleComponent";

const Actividades = ({ route, navigation }: any) => {
  const [actividad, setActividad] = useState([]);

  const onLoadData = async () => {
    const data = await getActividad(route.params.id);
    setActividad(data.data);
    //console.log(actividad);
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ButtonBackComponent onPress={() => navigation.pop()} icon={"left"} />
      <Layout>
        <View style={styles.imageContent}>
          <ImageZoom image={P_DATA + "instalaciones/FronTenis.jpg"} />
        </View>

        {actividad.map((value: any, index) => (
          <View key={index}>
            <View style={styles.card}>
              <Text
                style={[
                  FONTS.subTitle,
                  {
                    color: COLORS.primaryR,
                    textAlign: "center",
                    marginBottom: 20,
                  },
                ]}
              >
                {value.actividad.trim()}
              </Text>

              <View style={styles.content}>
                <ElementCard
                  title={"Ubicación"}
                  text={value.ubicacion.trim()}
                />
                <View style={styles.sep} />
                <ElementCard title={"Nivel"} text={value.niveles.trim()} />
              </View>

              <View style={styles.content}>
                <ElementCard title={"Edades"} text={value.edad.trim()} />
                <View style={styles.sep} />
                <ElementCard
                  title={"Ubicación"}
                  text={value.ubicacion.trim()}
                />
              </View>

              <View style={styles.content}>
                <ElementCard title={"Días"} text={value.fecha.trim()} />
                <View style={styles.sep} />
                <ElementCard
                  title={"Horario"}
                  text={value.horini.trim() + " - " + value.horfin.trim()}
                />
              </View>

              <View style={styles.priceContent}>
                <View style={styles.content}>
                  <ElementCard
                    title={"PRECIO POR MES"}
                    text={value.precio.trim()}
                  />
                  <View style={styles.sep} />
                  <ElementCard
                    title={"PRECIO POR DÍA"}
                    text={value.dia.trim()}
                  />
                </View>
              </View>
            </View>

            <TitleComponent text={"Descripción"} />

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

const ElementCard = ({ title, text }: any) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", marginLeft: 10 }}>
      <Text style={[FONTS.body, { marginTop: 10 }]}>{title}:</Text>
      <Text style={[FONTS.desc, { marginTop: 10, color: COLORS.primaryR }]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  sep: {
    borderLeftColor: COLORS.grayT0_3,
    borderLeftWidth: 1,
    height: 30,
    marginHorizontal: 10,
  },
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
    marginTop: 20,
    padding: 20,
    flexDirection: "column",
    borderRadius: 30,
    backgroundColor: COLORS.white,
  },

  /*content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },*/
  tagsContent: {
    marginTop: 150,
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: COLORS.primaryR,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  priceContent: {
    borderColor: COLORS.primaryR,
    borderTopWidth: 2,
    marginVertical: 20,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default Actividades;
