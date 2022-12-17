import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import ImageZoom from "../../components/ImageZoom";
import Layout from "../../components/Layout";
import { P_DATA } from "@env";

const UsuarioEspecial = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Layout>
        <View style={styles.container}>
          <View style={styles.imageContent}>
            <ImageZoom image={P_DATA + "instalaciones/Áreas verdes.jpg"} />
          </View>

          <View style={styles.titleContent}>
            <Text
              style={[
                FONTS.subTitle,
                { color: COLORS.primaryR, textAlign: "left", fontSize: 26 },
              ]}
            >
              Usuario Especial
            </Text>
            <Text
              style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}
            ></Text>
          </View>
          <View style={styles.descriptionContent}>
            <Text
              style={[
                FONTS.desc,
                { color: COLORS.gray, marginTop: 5, textAlign: "justify" },
              ]}
            >
              Para el Centro Deportivo un USUARIO ESPECIAL es aquella persona
              que ha sido inscrita en el Centro Deportivo, habiendo dejado de
              ser empleado de una institución inscrita o al presentar una carta
              de recomendación de un usuario activo, cubriendo los requisitos
              marcados en el Reglamento General de Usuarios y con aprobación de
              la Administración.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              Para ser admitido en el Centro Deportivo como usuario especial
              deberán cumplirse los siguientes requisitos:
            </Text>

            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              1.- Presentar carta a la Gerencia General del Centro Deportivo
              solicitando su ingreso.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              2.- Requisitar la solicitud de ingreso del Centro Deportivo.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              3.- Requisitar la Cédula de Datos Personales.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              4.- Firmar la Carta-Compromiso.
            </Text>
          </View>

          <View style={styles.descriptionContent}>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              5.- Cada solicitante deberá presentar los siguientes documentos:
            </Text>

            <View style={{ marginLeft: 30, marginTop: 30 }}>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                A.- Identificación oficial (IFE) del titular, cónyuge e hijos
                mayores de edad.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                B.- Carta de recomendación de un usuario activo.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                C.- Comprobante de domicilio.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                D.- Comprobante de ingresos.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                E.- Acta de nacimiento del titular y sus beneficiarios.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                F.- Acta de matrimonio o acta de convivencia.
              </Text>
              <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
                G.- Copia de inscripción al IMSS o ISSSTE o seguro de gastos
                médicos mayores.
              </Text>
            </View>
          </View>

          <View style={styles.descriptionContent}>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              6.- Si se causó baja en una institución inscrita será
              indispensable presentar carta de recomendación de la institución.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              7.- Haber cumplido los 21 años de edad, siendo usuario familiar.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              8.- En el caso de concubina o concubinario deberá estar acreditado
              por el usuario especial, en los términos que establece la Ley del
              Seguro Social.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              9.- Efectuar los trámites complementarios como: revisión médica de
              admisión, registro fotográfico y expedición de credencial de
              identificación y acceso. Las cuotas por estos servicios se
              cubrirán directamente en caja.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              10.- Cubrir la cuota vigente por concepto de admisión y la primera
              cuota trimestral correspondiente.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              11.- La admisión no es transferible, representa únicamente el
              derecho a pertenecer al Centro Deportivo.
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              12.- No habrá devolución de la cuota de admisión.
            </Text>
          </View>

          <View style={styles.titleContent}>
            <Text style={[FONTS.subTitle, { color: COLORS.primaryR }]}>
              CUOTAS PARA USUARIOS ESPECIALES
            </Text>
            <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
              Nota: I.V.A. incluido.
            </Text>
          </View>

          <Card
            title={"Admisión individual (pago único)"}
            price={"$11,600.00"}
          />
          <Card title={"Admisión pareja (pago único)"} price={"$23,200.00"} />
          <Card title={"Admisión familiar (pago único)"} price={"$34,800.00"} />
          <Card title={"Titular (pago mensual)	"} price={"$1,622.76"} />
          <Card
            title={
              "Por cada beneficiario cónyuge e hijos menores a 21 años (pago mensual)"
            }
            price={"$811.39"}
          />
        </View>
      </Layout>
    </ScrollView>
  );
};

const Card = ({ title, price }: any) => {
  return (
    <View style={styles.row}>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.nameContainer}>
          <Text
            style={[
              FONTS.subTitle,
              { color: COLORS.primaryR, textAlign: "right" },
            ]}
          >
            {price}
          </Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={[FONTS.body, { color: COLORS.gray }]} numberOfLines={3}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
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

  row: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    marginVertical: 10,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginTop: 10,
  },
});

export default UsuarioEspecial;
