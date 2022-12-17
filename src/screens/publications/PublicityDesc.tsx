import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { getPublicityDesc } from "../../api/api";
import Layout from "../../components/Layout";
import ImageZoom from "../../components/ImageZoom";
import FONTS from "../../components/util/Fonts";
import COLORS from "../../components/util/Colors";
import ButtonBackComponent from "../../components/ButtomBackComponent";

const PublicityDesc = ({ route, navigation }: any) => {
  const [publicity, setPublicity] = useState([]);

  const getPublicity = async () => {
    const data = await getPublicityDesc(route.params.id);
    //console.log(data.data);
    setPublicity(data.data);
  };

  useEffect(() => {
    getPublicity();
  }, []);

  return (
    <Layout>
      <ButtonBackComponent onPress={() => navigation.pop()} icon={"left"} />
      <FlatList
        scrollEventThrottle={16}
        data={publicity}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }: any) => {
          return (
            <View style={styles.container}>
              <View style={styles.header}>
                <ImageZoom image={item.img_url} />
              </View>

              <View style={styles.postContent}>
                <Text
                  style={[
                    FONTS.subTitle,
                    { color: COLORS.primaryR, fontSize: 26 },
                  ]}
                >
                  {item.title}
                </Text>

                <Text style={[FONTS.desc, { marginTop: 10 }]}>{item.body}</Text>

                <Text style={[FONTS.desc, { marginTop: 10 }]}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    width: "100%",
    height: 200,
  },
  postContent: {
    flex: 1,
    padding: 30,
  },
});
export default PublicityDesc;
