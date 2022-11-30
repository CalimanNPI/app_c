import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import Layout from "../../components/Layout";
import { cuotas } from "../../components/util/data";

const renderItem = ({ item }: any) => {
  return (
    <View style={[styles.card, { borderColor: COLORS.primaryB }]}>
      
      <AntDesign name="checkcircle" size={24} color={COLORS.primaryB} />
      <View style={styles.cardContent}>
        <Text style={[styles.description]}>{item.name}</Text>
        <Text style={styles.date}>{item.cost ? `$ ${item.cost} MXN` : ""}</Text>
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
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: "46%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeftWidth: 6,
  },

  description: {
    fontSize: 18,
    flex: 1,
    color: COLORS.primaryB,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    flex: 1,
    color: COLORS.gray,
    marginTop: 5,
  },
});

export default CuotasScreens;
