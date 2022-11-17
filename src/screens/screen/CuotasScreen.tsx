import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import Layout from "../../components/Layout";

import { cuotas } from "../../components/util/data";

const renderItem = ({ item }: any) => {
  return (
    <View style={styles.row}>
      <View style={{ marginHorizontal: 30 }}>
        <View style={styles.nameContainer}>
          <Text
            style={[FONTS.subTitle, { color: COLORS.gray, textAlign: "right" }]}
            numberOfLines={3}
          >
            {item.name}
          </Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={[FONTS.body, { color: COLORS.primaryR }]}>
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
        data={cuotas}
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
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    marginVertical: 10,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
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
  },
});

export default CuotasScreens;
