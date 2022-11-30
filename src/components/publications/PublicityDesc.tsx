import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { getPublicityDesc } from "../../api/api";
import Layout from "../Layout";
import ImageZoom from "../ImageZoom";
import FONTS from "../util/Fonts";
import COLORS from "../util/Colors";

const PublicityDesc = ({ route }: any) => {
  const [publicity, setPublicity] = useState([]);

  const getPublicity = async () => {
    const data = await getPublicityDesc(route.params.id);
    console.log(data.data);
    setPublicity(data.data);
  };

  useEffect(() => {
    getPublicity();
  }, []);

  return (
    <Layout>
      <PublicityItemDesc item={publicity} />
    </Layout>
  );
};

const PublicityItemDesc = ({ item }: any) => {
  return (
    <FlatList
      scrollEventThrottle={16}
      data={item}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item._id}
      renderItem={renderItem}
    />
  );
};

const renderItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <ImageZoom image={item.img_url} />
      </View>

      <View style={styles.titleContent}>
        <Text style={[FONTS.title, { color: COLORS.primaryB }]}>
          {item.title}
        </Text>
        {/*<Text style={[FONTS.body, { color: COLORS.gray, marginTop: 5 }]}>
          HORA
  </Text>*/}
      </View>
      <View style={styles.descriptionContent}>
        <Text style={[FONTS.body, { marginTop: 5, textAlign: "justify" }]}>
          {item.body}
        </Text>
        <Text style={[FONTS.body, { marginTop: 10, textAlign: "justify" }]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContent: { width: "100%", height: 200 },
  titleContent: {
    width: "100%",
    marginHorizontal: 20,
    marginTop: 30,
    padding: 10,
    flex: 1,
    flexDirection: "column",
  },
  descriptionContent: {
    marginHorizontal: 20,
  },
});

export default PublicityDesc;
