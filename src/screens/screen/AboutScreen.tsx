import React, { useRef } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import PagerView from "react-native-pager-view";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";
import Layout from "../../components/Layout";

import { P_DATA } from "@env";

import { valores } from "../../components/util/data";

import { Footer, Page } from "../../components/PagerViewComponent";
import ButtonBackComponent from "../../components/ButtomBackComponent";
import CenterSvgComponent from "../../components/svg/CenterSVG";
import TopSvgComponent from "../../components/svg/TopSVG";

const AboutScreen = ({ navigation }) => {
  const pagerRef = useRef(null);
  const handlePageChange = (pageNumbre: any) => {
    //console.log(pageNumbre);
    pagerRef.current.setPage(pageNumbre);
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.white }}>
      <Layout>
        <TopSvgComponent />
        <ButtonBackComponent
          onPress={() => navigation.openDrawer()}
          icon={"menu-fold"}
        />

        <View style={styles.container}>
          <Text style={[FONTS.title, { color: COLORS.white }]}>
            Nuestra historia
          </Text>
          <Text style={[FONTS.subTitle, { color: COLORS.white }]}>
            Centro Deportivo Coyoacán A.C.
          </Text>
          <View style={styles.descriptionContent}>
            <Text
              style={[
                FONTS.body,
                { color: COLORS.white, textAlign: "justify" },
              ]}
            >
              Centro Deportivo Coyoacán, A.C. es una asociación civil, no
              lucrativa, constituida en 1977 por varias instituciones con el
              objetivo de brindar a sus empleados y a sus familiares un espacio
              exclusivo de esparcimiento, desarrollo físico y mental.
            </Text>
          </View>
          <Image
            style={styles.logo}
            source={{
              uri: P_DATA + "onboarding/1.png",
            }}
          />
        </View>

        <PagerView
          style={{ flex: 1, height: 400 }}
          initialPage={0}
          scrollEnabled={true}
          ref={pagerRef}
        >
          {valores.map((item, index) => {
            return (
              <View key={item["id"]}>
                {item["id"] == 1 ? (
                  <View style={{ flex: 1 }}>
                    <Page
                      backgroundColor={COLORS.white}
                      icon={item.icon}
                      title={item.title}
                      desc={item.desc}
                    />
                    <Footer
                      backgroundColor={COLORS.white}
                      rightButtonLabel="Próxima"
                      rightButtonPress={() => handlePageChange(item["id"])}
                    />
                  </View>
                ) : (
                  <View style={{ flex: 1 }}>
                    <Page
                      backgroundColor={COLORS.white}
                      icon={item.icon}
                      title={item.title}
                      desc={item.desc}
                    />
                    <Footer
                      backgroundColor={COLORS.white}
                      rightButtonLabel="Próxima"
                      rightButtonPress={() => handlePageChange(item["id"])}
                      leftButtonLabel="Atrás"
                      leftButtonPress={() => {
                        handlePageChange(item["id"] - 2);
                      }}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </PagerView>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    marginTop: 50,
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
    flexDirection: "column",
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },

  image: {
    width: 45,
    height: 45,
    fontSize: 40,
    color: COLORS.primaryR,
    position: "relative",
    right: 10,
  },
  pager: {
    width: "100%",
    height: 230,
  },
});

export default AboutScreen;
