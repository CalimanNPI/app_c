import React, { useRef, useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import Animated from "react-native-reanimated";
import { getPublicityDesc } from "../../api/api";
import Layout from "../Layout";
import ImageZoom from "../ImageZoom";

const imageUri = "http://192.168.1.243/api_cdc/public/img/anuncios8.jpg";

const PublicityDesc = ({ route }: any) => {
  const [publicity, setPublicity] = useState([]);

  const getPublicity = async () => {
    const data = await getPublicityDesc(route.params.id);
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
    <SafeAreaView>
      <Animated.FlatList
        scrollEventThrottle={16}
        data={item}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item._id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const renderItem = ({ item, route }: any) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <View
        style={{
          width: "100%",
          height: 200,
          zIndex: 2,
        }}
      >
        <ImageZoom image={item.img_url} />
      </View>
      <View style={styles.lineStyle}></View>
      <Text style={styles.textTitle}>{item.title}</Text>
      <View style={styles.lineStyle}></View>
      <Text style={styles.textText}>{item.body}</Text>
      <Text style={styles.textText}>{item.description}</Text>
      <View style={styles.lineStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 5,
    borderColor: "rgba(229,229,234, 0.9)",
    backgroundColor: "rgba(229,229,234, 0.9)",
    marginVertical: 5,
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 35,
    textAlign: "center",
    margin: 20,
  },
  textText: {
    fontFamily: "SpaceMono_400Regular",
    color: "#8E8E93",
    fontSize: 14,
    textAlign: "justify",
    margin: 20,
  },
});

export default PublicityDesc;
