import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import ImageZoom from "../../components/ImageZoom";
import Layout from "../../components/Layout";
import { P_DATA } from "@env";

const UsuarioInstitucional = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout>
        <View style={styles.container}>
          <View style={styles.imageContent}>
            <ImageZoom image={P_DATA + "instalaciones/Café.jpg"} />
          </View>

          <View style={styles.titleContent}>
            <Text
              style={[FONTS.subTitle, { color: COLORS.primaryR, fontSize: 26 }]}
            >
              Usuario Institucional
            </Text>
            <Text
              style={[
                FONTS.desc,
                { color: COLORS.gray, marginTop: 5, textAlign: "justify" },
              ]}
            >
              Podrá hacer uso de las instalaciones el mismo día en el que
              realizó el trámite.
            </Text>
          </View>
          <View style={styles.descriptionContent}>
            <Text
              style={[
                FONTS.desc,
                { color: COLORS.gray, marginTop: 5, textAlign: "justify" },
              ]}
            >
              Para el Centro Deportivo un USUARIO INSTITUCIONAL es el empleado
              de una institución inscrito a petición de ésta en el Centro
              Deportivo. El empleado deberá presentar su solicitud directamente
              en su institución ya que ellos son los encargados de realizar las
              altas y bajas de las solicitudes de sus empleados. Una vez que la
              Institución le comunique la aprobación de su ingreso, deberá
              realizar el siguiente procedimiento:
            </Text>

            <View style={{ marginLeft: 30, marginTop: 30 }}>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                1.- Presentarse en el mostrador de Servicio a Usuarios con su
                credencial de empleado expedida por su institución.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                2.- Pagar la cuota correspondiente en la Caja General por
                concepto de trámite de credencial tanto del titular como de sus
                beneficiarios. Consulte nuestra sección de Cuotas.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                3.- Pasar al Servicio Médico, éste tendrá una vigencia de 1 año.
              </Text>
            </View>

            <Text
              style={[
                FONTS.desc,
                { color: COLORS.gray, marginTop: 20, textAlign: "justify" },
              ]}
            >
              Podrá hacer uso de las instalaciones el mismo día en el que
              realizó el trámite. Consulte los horarios de servicio de este
              Centro Deportivo en nuestra sección de Horarios.
            </Text>
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

export default UsuarioInstitucional;
