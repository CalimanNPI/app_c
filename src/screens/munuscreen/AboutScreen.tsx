import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import Layout from "../../components/Layout";

import { P_DATA } from "@env";

import { valores } from "../../components/util/data";

const AboutScreen = () => {
  return (
    <ScrollView>
      <Layout>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: P_DATA + "onboarding/3.png",
            }}
          />
          <Text style={[FONTS.title, { color: COLORS.gray }]}>
            Nuestra historia
          </Text>
          <Text style={[FONTS.subTitle, { color: COLORS.gray }]}>
            Centro Deportivo Coyoacán A.C.
          </Text>
          <View style={styles.descriptionContent}>
            <Text style={[FONTS.body, { color: COLORS.gray }]}>
              Centro Deportivo Coyoacán, A.C. es una asociación civil, no
              lucrativa, constituida en 1977 por varias instituciones con el
              objetivo de brindar a sus empleados y a sus familiares un espacio
              exclusivo de esparcimiento, desarrollo físico y mental.
            </Text>
          </View>
        </View>

        {valores.map((item) => {
          return (
            <View style={styles.containerItem} key={item["id"]}>
              <AntDesign name="infocirlceo" style={styles.image} />
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text style={[FONTS.subTitle, { color: COLORS.white }]}>
                    {item["title"]}
                  </Text>
                </View>
                <Text style={[FONTS.body, { color: COLORS.white }]}>
                  {item["desc"]}
                </Text>
              </View>
            </View>
          );
        })}
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  separator: {
    padding: 5,
    backgroundColor: COLORS.primaryRLight,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 200,
    height: 150,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  descriptionContent: {
    padding: 30,
  },
  containerItem: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: COLORS.primaryRLight,
    marginTop: 5,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
    fontSize: 40,
    color: COLORS.white,
  },
});

export default AboutScreen;
