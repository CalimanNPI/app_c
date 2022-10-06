import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{item.title}</Text>
      </View>
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{item.body}</Text>
      </View>
      <View style={styles.profile}>
        <ImageZoom image={item.img_url} />
      </View>
      <View style={styles.postContent}>
        <Text style={styles.postDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    alignItems: "center",
    backgroundColor: "#FF3B30",
  },
  headerTitle: {
    fontSize: 30,
    color: "#F2F2F7",
    marginTop: 10,
    fontFamily: "SpaceMono_700Bold",
  },
  name: {
    fontSize: 22,
    color: "#8E8E93",
    fontFamily: "SpaceMono_700Bold",
  },
  postContent: {
    flex: 1,
    padding: 30,
    backgroundColor: "#F2F2F7",
    marginVertical: 10,
  },
  postTitle: {
    fontSize: 20,
    color: "#8E8E93",
    fontFamily: "SpaceMono_700Bold",
  },
  postDescription: {
    color: "#8E8E93",
    fontSize: 16,
    marginTop: 10,
    fontFamily: "SpaceMono_700Bold",
  },
  profile: {
    width: "100%",
    height: 200,
    zIndex: 2,
    marginBottom: 10,
  },
});

export default PublicityDesc;
