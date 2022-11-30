import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import Layout from "../../components/Layout";

import { horario } from "../../components/util/data";

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
                
                <Text style={[FONTS.body, { color: COLORS.primaryR }]}>
                  {item.openH} - {item.closeH}
                </Text>
                <Text style={[FONTS.subTitle, { color: COLORS.gray }]}>
                  {item.daySer ? item.daySer : ""}
                </Text>
                <Text style={[FONTS.desc, { color: COLORS.gray }]}>
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
  eventDay: {
    fontSize: 50,
    color: COLORS.primaryR,
    fontFamily: "SpaceMono_700Bold",
  },
  eventMonth: {
    fontSize: 20,
    color: COLORS.gray,
    fontFamily: "SpaceMono_700Bold",
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

  eventContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
});

export default HorariosScreen;
