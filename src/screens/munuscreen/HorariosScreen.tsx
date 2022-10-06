import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Layout from "../../components/Layout";

const horario = [
  {
    id: 30,
    day: 0,
    month: "",
    desc: "Horarios habituales del Centro Deportivo Coyoacán, A.C.",
    openH: "06:00 AM",
    closeH: "22:00 PM",
    daySer: "Lunes a Viernes",
  },
  {
    id: 31,
    day: 0,
    month: "",
    desc: "Horarios habituales del Centro Deportivo Coyoacán, A.C.",
    openH: "07:00 AM",
    closeH: "19:00 PM",
    daySer: "Sábados",
  },
  {
    id: 33,
    day: 0,
    month: "",
    desc: "Horarios habituales del Centro Deportivo Coyoacán, A.C.",
    openH: "08:00 AM",
    closeH: "18:00 PM",
    daySer: "Domingos",
  },
  {
    id: 14,
    day: 0,
    month: "",
    desc: "Semana Santa",
    openH: "09:00 AM",
    closeH: "17:00 PM",
    daySer: "Jueves, Viernes, Sábado y Domingo",
  },

  {
    id: 3,
    day: 2,
    month: "Nov",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 4,
    day: 12,
    month: "Dic",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 5,
    day: 24,
    month: "Dic",
    desc: "",
    openH: "06:00 AM",
    closeH: "13:30 PM",
  },
  {
    id: 6,
    day: 31,
    month: "Dic",
    desc: "",
    openH: "06:00 AM",
    closeH: "13:30 PM",
  },

  {
    id: 7,
    day: 5,
    month: "Feb",
    desc: "El primer lunes de febrero en conmemoración del 5 de febrero",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 8,
    day: 21,
    month: "Mar",
    desc: "El tercer lunes de marzo en conmemoración del 21 de marzo",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 9,
    day: 1,
    month: "May",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 10,
    day: 16,
    month: "Sep",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 11,
    day: 20,
    month: "Nov",
    desc: "El tercer lunes de noviembre en conmemoración del 20 de noviembre",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 12,
    day: 0,
    month: "",
    desc: "El primero de diciembre de cada seis años cuando corresponda a la transmisión del Poder Ejecutivo Federal",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 13,
    day: 0,
    month: "",
    desc: "El que determine las leyes federales y locales electorales en el caso de elecciones ordinarias, para efectuar la jornada electoral",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },

  {
    id: 1,
    day: 1,
    month: "Ene",
    desc: "El C.D.C. permanecerá cerrado.",
    openH: "00:00 AM",
    closeH: "00:00 PM",
  },
  {
    id: 2,
    day: 25,
    month: "Dic",
    desc: "El C.D.C. permanecerá cerrado.",
    openH: "00:00 AM",
    closeH: "00:00 PM",
  },
];

const HorariosScreen = () => {
  return (
    <Layout>
      <FlatList
        data={horario}
        style={styles.eventList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.eventBox}>
              <View style={styles.eventDate}>
                <Text style={styles.eventDay}>{item.day ? item.day : ""}</Text>
                <Text style={styles.eventMonth}>
                  {item.month ? item.month : ""}
                </Text>
              </View>
              <View style={styles.eventContent}>
                <Text style={styles.textText}>
                  {item.daySer ? item.daySer : ""}
                </Text>
                <Text style={[styles.textText, { color: "#FF3B30" }]}>
                  {item.openH} - {item.closeH}
                </Text>
                <Text
                  style={[styles.textText, { fontSize: 12, marginTop: 10 }]}
                >
                  {item.desc ? item.desc : "No cuenta con una descripción."}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 20,
    textAlign: "left",
  },
  textText: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "justify",
  },
  eventList: {
    width: "100%",
  },
  eventBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
  },
  eventDate: {
    flexDirection: "column",
  },
  eventDay: {
    fontSize: 50,
    color: "#FF3B30",
    fontFamily: "SpaceMono_700Bold",
  },
  eventMonth: {
    fontSize: 20,
    color: "#FF3B30",
    fontFamily: "SpaceMono_700Bold",
  },
  eventContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
    backgroundColor: "#F2F2F7",
    padding: 10,
    borderRadius: 10,
  },
});

export default HorariosScreen;
