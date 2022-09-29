import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  RefreshControl,
  Platform,
  Button,
  Text,
  SafeAreaView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Layout from "../components/Layout";
import PublicityList from "../components/publications/PublicityList";
import { getPublicity } from "../api/api";
import ButtomMenu from "../components/ButtomMenu";

const { width, height } = Dimensions.get("window");
var box_count = 3;
var box_height = height / box_count;

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }: any) => {
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
            colors={["#FF3B30"]}
            progressBackgroundColor={"#F2F2F7"}
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

        <LinearGradient
          colors={["#f2f2f7", "#f2f2f7", "#f2f2f7"]}
          style={styles.bodyContend}
        >
          <PublicityList item={publicitys} />
        </LinearGradient>
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
    width: width,
    height: box_height,
    position: "relative",
    top: -20,
    zIndex: -1,
  },
  bodyContend: {
    width: width,
    backgroundColor: "#f2f2f7",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  textTitle: {
    fontFamily: Platform.OS === "ios" ? "Cagliostro" : "monospace",
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF3B30",
    textAlign: "justify",
    textAlignVertical: "center",
  },
  cardContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    padding: 5,
    marginVertical: 30,
  },
  image: {
    height: "100%",
    flex: 0.35,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default HomeScreen;
