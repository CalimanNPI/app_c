import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";
import ImageZoom from "../ImageZoom";
import Layout from "../Layout";
import { P_DATA } from "@env";

const PasesVisita = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout>
        <View style={styles.container}>
          <View style={styles.imageContent}>
            <ImageZoom image={P_DATA + "instalaciones/Tatami.jpg"} />
          </View>

          <View style={styles.titleContent}>
            <Text style={[FONTS.subTitle, { color: COLORS.gray }]}>
              Pases de Visita
            </Text>
            <Text
              style={[FONTS.desc, { color: COLORS.primaryR, marginTop: 5 }]}
            >
              CON USO DE INSTALACIONES
            </Text>
          </View>
          <View style={styles.descriptionContent}>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              El usuario y el deportista de los equipos representativos podrán
              traer invitados al Centro Deportivo para hacer uso de las
              instalaciones entre semana, fines de semana y días festivos,
              deberán realizar el siguiente procedimiento:
            </Text>

            <View style={{ marginLeft: 30, marginTop: 30 }}>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                1.- Solicitar los pases de visita en la Caja General dejando una
                identificación oficial. Cabe señalar que el usuario quedará como
                responsable de sus invitados durante su estancia en el Centro
                Deportivo.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                2.- Pagar la cuota vigente por concepto de pase de visita con
                uso de instalaciones consulte nuestra sección de Cuotas.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                3.- El invitado deberá someterse a una revisión médica, la cual
                tendrá una vigencia de 6 meses.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                4.- El pase de visita sólo tendrá vigencia por un día. Al
                finalizar el servicio deberá pasar a la Caja General a recoger
                la identificación oficial que dejó.
              </Text>
            </View>
          </View>

          <View style={styles.titleContent}>
            <Text style={[FONTS.subTitle, { color: COLORS.gray }]}>
              Pases de Visita
            </Text>
            <Text
              style={[FONTS.desc, { color: COLORS.primaryR, marginTop: 5 }]}
            >
              SIN USO DE INSTALACIONES
            </Text>
          </View>
          <View style={styles.descriptionContent}>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              El usuario y el deportista de los equipos representativos podrán
              traer invitados al Centro Deportivo para hacer uso exclusivo de la
              Cafetería, deberán realizar el siguiente procedimiento:
            </Text>

            <View style={{ marginLeft: 30, marginTop: 30 }}>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                1.- Solicitar los brazaletes necesarios en el mostrador de
                Servicio a Usuarios presentando su credencial de usuario.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                2.- La duración máxima es de 2 horas, pasado este tiempo pagarán
                pase de visita con uso de instalaciones.
              </Text>
            </View>
          </View>
        </View>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContent: { width: "100%", height: 200 },
  titleContent: {
    width: "100%",
    marginHorizontal: 30,
    marginTop: 30,
    padding: 10,
  },
  descriptionContent: {
    width: "100%",
    marginHorizontal: 30,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});

export default PasesVisita;
