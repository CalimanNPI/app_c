import React from "react";
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
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";

import { menus } from "../../components/util/data";

const renderItem = ({ item }: any) => {
  const _handleOpen = (pdf: string) => {
    openURL(pdf);
  };

  const _handleOpenImg = (pdf: string) => {
    //openURL(pdf);
    console.log(pdf);
  };

  return (
    <TouchableOpacity onPress={() => _handleOpen(item.pdf)}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: item.image }} />
        <View style={styles.cardContent}>
          <View>
            <Text style={[FONTS.title, { color: COLORS.white }]}>
              {item.title}
            </Text>
            <Text style={[FONTS.subTitle, { color: COLORS.white }]}>
              {item.desc}
            </Text>
          </View>
        </View>
        <View style={[StyleSheet.absoluteFillObject, styles.itemOverlay]} />
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
        data={menus}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  itemOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  separator: { padding: 1, backgroundColor: COLORS.white },
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
});

export default CafeteriaScreen;
