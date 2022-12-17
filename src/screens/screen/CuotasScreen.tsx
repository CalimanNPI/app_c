import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import Layout from "../../components/Layout";
import { cuotas } from "../../components/util/data";

const renderItem = ({ item }: any) => {
  return (
    <View style={[styles.card, { borderColor: COLORS.primaryR }]}>
      {item.cost && (
        <AntDesign name="checkcircle" size={24} color={COLORS.primaryR} />
      )}
      <View style={styles.cardContent}>
        <Text style={[FONTS.subTitle, { color: COLORS.primaryR }]}>
          {item.name}
        </Text>
        <Text style={[FONTS.desc, { marginTop: 7 }]}>
          {item.cost ? `$ ${item.cost} MXN` : ""}
        </Text>
      </View>
    </View>
  );
};

const CuotasScreens = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <FlatList
          data={cuotas}
          keyExtractor={(item: any) => {
            return item.id;
          }}
          renderItem={renderItem}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },

  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: "46%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeftWidth: 6,

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

export default CuotasScreens;
