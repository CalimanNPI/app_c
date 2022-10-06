import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { openURL } from "expo-linking";
import Layout from "../../components/Layout";

const items = [
  {
    id: 1,
    title: "Menú del día",
    desc: "Los sabores que te harán sentir bien. ",
    image: "http://192.168.1.243/api_cdc/public/menus/img/dia.png",
    pdf: "http://192.168.1.243/api_cdc/public/menus/Menu-Infantil.pdf",
  },
  {
    id: 2,
    title: "Menú de desayunos",
    desc: "Los sabores que te harán sentir bien. ",
    image: "http://192.168.1.243/api_cdc/public/menus/img/desayunos.png",
    pdf: "http://192.168.1.243/api_cdc/public/menus/Menu-De-Desayunos.pdf",
  },
  {
    id: 3,
    title: "Menú comidas y cenas",
    desc: "Los sabores que te harán sentir bien. ",
    image: "http://192.168.1.243/api_cdc/public/menus/img/comidas.png",
    pdf: "http://192.168.1.243/api_cdc/public/menus/Menu-De-Comida-y-Cenas.pdf",
  },
  {
    id: 4,
    title: "Menú infantil",
    desc: "Los sabores que te harán sentir bien. ",
    image: "http://192.168.1.243/api_cdc/public/menus/img/infantil.png",
    pdf: "http://192.168.1.243/api_cdc/public/menus/Menu-Infantil.pdf",
  },
  {
    id: 5,
    title: "Menú de comida rapida",
    desc: "Los sabores que te harán sentir bien. ",
    image: "http://192.168.1.243/api_cdc/public/menus/img/fast.png",
    pdf: "http://192.168.1.243/api_cdc/public/menus/Menu-De-Comida-Rapida.pdf",
  },
];

const renderItem = ({ item }: any) => {
  const _handleOpen = (pdf: string) => {
    openURL(pdf);
  };

  return (
    <TouchableOpacity onPress={() => _handleOpen(item.pdf)}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: item.image }} />
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textText}>{item.desc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CafeteriaScreen = () => {
  return (
    <Layout>
      <FlatList
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
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
  separator: {
    marginTop: 1,
  },
  card: {
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#F2F2F7",
    backgroundColor: "#F2F2F7",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    flex: 1,
    height: 200,
    width: null,
    position: "absolute",
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    fontSize: 25,
    color: "#F2F2F7",
    marginTop: 10,
  },
  textText: {
    fontFamily: "SpaceMono_700Bold",
    fontSize: 14,
    color: "#F2F2F7",
    marginTop: 5,
  },
});

export default CafeteriaScreen;
