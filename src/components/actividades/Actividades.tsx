import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { getActividades, searchActi } from "../../api/api";
import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";
import Layout from "../Layout";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Actividades = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [actividades, setActividades] = useState([]);
  const [searchInput, setSearchInput] = useState({ search: "" });
  const [searchData, setSearchData] = useState([]);

  const navigation = useNavigation();

  const onLoadData = async () => {
    const data = await getActividades();
    setActividades(data.data);
    //Alert.alert("Alert", "Button pressed ");
  };

  const alertData = () => {
    alert(JSON.stringify(searchInput));
  };

  const handleChange = (name: any, value: any) => {
    setSearchInput({ ...searchInput, [name]: value });
    search();
  };

  useEffect(() => {
    onLoadData();
  }, [refreshing]);

  const search = async () => {
    if (searchInput.search) {
      const data = await searchActi(searchInput);
      setSearchData(data.data);
    } else {
      setSearchData([]);
    }
  };

  return (
    <Layout>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputs]}
            placeholder="Search"
            underlineColorAndroid="transparent"
            value={searchInput.search}
            onChangeText={(text: string) => handleChange("search", text)}
          />
        </View>
      </View>

      <View style={styles.container}>
        {searchData.length >= 1 ? (
          <FlatList
            style={styles.contentList}
            data={searchData}
            keyExtractor={(_: any, index: any) => {
              return index;
            }}
            renderItem={({ item }: any) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    navigation.navigate("Activity", { id: item.numero });
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://img.icons8.com/color/70/000000/cottage.png",
                    }}
                  />
                  <View style={styles.cardContent}>
                    <Text style={[FONTS.body, { color: COLORS.primaryB }]}>
                      {item.actividad.trim()}
                    </Text>
                    <Text style={[FONTS.body, { color: COLORS.gray }]}>
                      {item.niveles.trim()}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        margin: 5,
                        alignItems: "center",
                      }}
                    >
                      <AntDesign
                        name="clockcircleo"
                        size={15}
                        color={COLORS.grayR}
                      />
                      <Text
                        style={[
                          FONTS.body,
                          { color: COLORS.grayT0_3, marginLeft: 5 },
                        ]}
                      >
                        {item.horini.trim() +
                          " - " +
                          item.horfin.trim() +
                          " hrs"}
                      </Text>
                    </View>
                    <Text style={[FONTS.desc, { color: COLORS.gray }]}>
                      {item.ubicacion.trim()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[COLORS.primaryR]}
                progressBackgroundColor={COLORS.white}
              />
            }
          />
        ) : (
          <FlatList
            style={styles.contentList}
            data={actividades}
            keyExtractor={(_: any, index: any) => {
              return index;
            }}
            renderItem={({ item }: any) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    navigation.navigate("Activity", { id: item.numero });
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://img.icons8.com/color/70/000000/cottage.png",
                    }}
                  />
                  <View style={styles.cardContent}>
                    <Text style={[FONTS.body, { color: COLORS.primaryB }]}>
                      {item.actividad.trim()}
                    </Text>
                    <Text style={[FONTS.body, { color: COLORS.gray }]}>
                      {item.niveles.trim()}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        margin: 5,
                        alignItems: "center",
                      }}
                    >
                      <AntDesign
                        name="clockcircleo"
                        size={15}
                        color={COLORS.grayR}
                      />
                      <Text
                        style={[
                          FONTS.body,
                          { color: COLORS.grayT0_3, marginLeft: 5 },
                        ]}
                      >
                        {item.horini.trim() +
                          " - " +
                          item.horfin.trim() +
                          " hrs"}
                      </Text>
                    </View>

                    <Text style={[FONTS.desc, { color: COLORS.gray }]}>
                      {item.precio.trim()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[COLORS.primaryR]}
                progressBackgroundColor={COLORS.white}
              />
            }
          />
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  formContent: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderRadius: 30,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  saveButton: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 70,
    backgroundColor: COLORS.primaryB,
    borderRadius: 15,
  },
  saveButtonText: {
    color: COLORS.white,
  },

  /** CARD */
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: COLORS.white,
  },
  contentList: {
    flex: 1,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: COLORS.primaryB,
  },
  cardContent: {
    marginLeft: 15,
    marginTop: 10,
  },
  card: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: COLORS.white,
    padding: 10,
    flexDirection: "row",
    borderRadius: 30,
  },
});

export default Actividades;
