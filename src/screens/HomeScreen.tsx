import React, { useEffect, useState, useCallback } from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  Button,
} from "react-native";

import Layout from "../components/Layout";
import PublicityList from "../components/publications/PublicityList";
import { getPublicity } from "../api/api";
import COLORS from "../components/util/Colors";

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [publicitys, setPublicitys] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getPu = async () => {
    const data = await getPublicity();
    setPublicitys(data.data);
  };

  useEffect(() => {
    getPu();
  }, []);

  return (
    <Layout>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primaryR]}
            progressBackgroundColor={COLORS.white}
          />
        }
        style={styles.content}
      >
        <View style={styles.imageContent}>
          <Image
            source={require("../../assets/coyi/Panorama_CDC.png")}
            resizeMode="cover"
            style={{ width: "100%", height: 295 }}
          />
        </View>

        <View style={styles.bodyContent}>
          <PublicityList item={publicitys} />
          <PublicityList item={publicitys} />
          <PublicityList item={publicitys} />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
  },
  imageContent: {
    width: "100%",
    height: 250,
    position: "relative",
    top: -20,
    zIndex: -1,
  },
  bodyContent: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default HomeScreen;
