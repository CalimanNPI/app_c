import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Layout from "../../components/Layout";

const items = [
  { id: 1, name: "Trámite de credencial", status: "active", cost: "180,00" },
  { id: 2, name: "Reposición de credencial", status: "active", cost: "245,00" },
  { id: 3, name: "Extravío de toalla", status: "active", cost: "245,00" },
  { id: 4, name: "Extravío de placa", status: "active", cost: "127,00" },
  {
    id: 5,
    name: "Extravío de boleto de estacionamiento",
    status: "active",
    cost: "180,00",
  },
  { id: 6, name: "Servicio de toalla", status: "active", cost: "10,00" },
  {
    id: 7,
    name: "Estacionamiento por fracciones de 15 minutos",
    status: "active",
    cost: "$4,00",
  },
  {
    id: 8,
    name: "Estacionamiento por fracciones de 15 minutos (MOTOS)",
    status: "active",
    cost: "2,50",
  },
  {
    id: 9,
    name: "Prueba de InBody® usuarios e inivitados",
    status: "active",
    cost: "5,00",
  },
  { id: 10, name: "Una cita de Nutrición", status: "active", cost: "514,00" },
  {
    id: 11,
    name: "Una cita de Nutrición invitados",
    status: "active",
    cost: "599,00",
  },
  {
    id: 12,
    name: "Paquete de 4 citas de Nutrición	",
    status: "active",
    cost: "1.542,00",
  },
  {
    id: 13,
    name: "Paquete de 4 citas de Nutrición Invitados	",
    status: "active",
    cost: "1.797,00",
  },
  { id: 14, name: "Pase de visita entre semana:", status: "", cost: "" },
  { id: 15, name: "Adulto", status: "active", cost: "240,00" },
  {
    id: 16,
    name: "Niños y estudiantes con credencial menores de 25 años	",
    status: "active",
    cost: "180,00",
  },
  { id: 17, name: "Mayores de 60 años", status: "active", cost: "180,00" },
  { id: 18, name: "Pase de visitas fines de semana:", status: "", cost: "" },
  { id: 19, name: "Adulto", status: "active", cost: "240,00" },
  {
    id: 20,
    name: "Niños y estudiantes con credencial menores de 25 años	",
    status: "active",
    cost: "350,00",
  },
  { id: 21, name: "Mayores de 60 años	", status: "active", cost: "180,00" },
];

const renderItem = ({ item }: any) => {
  return (
    <View style={styles.row}>
      <View style={{ marginHorizontal: 30 }}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt} numberOfLines={3}>
            {item.name}
          </Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.msgTxt}>
            {item.cost ? `$ ${item.cost} MXN` : ""}
          </Text>
        </View>
      </View>
    </View>
  );
};

const CuotasScreens = () => {
  return (
    <Layout>
      <FlatList
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    marginVertical: 10,
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  nameTxt: {
    width: "100%",
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "left",
  },
  mblTxt: {
    fontFamily: "SpaceMono_400Regular",
    color: "#8E8E93",
    fontSize: 12,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontFamily: "SpaceMono_700Bold",
    color: "#FF3B30",
    fontSize: 14,
  },
});

export default CuotasScreens;
