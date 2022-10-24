import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";
import Layout from "../Layout";
import ModalCarousel from "../ModalCarousel";

const InstalacioneDesc = ({ route }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const images = route.params.images;

  return (
    <Layout>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageContent}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={{ uri: images[2]["image"] }}
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
          />
          <View style={styles.overlayContent}>
            <View style={styles.overlayText}>
              <Text style={styles.count}>1/{images.length}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.titleContent}>
          <Text style={[FONTS.subTitle, { color: COLORS.gray }]}>
            {route.params.title}
          </Text>
          <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
            {route.params.time}
          </Text>
        </View>
        <View style={styles.descriptionContent}>
          <Text style={[FONTS.desc, { color: COLORS.gray, marginTop: 5 }]}>
            {route.params.desc}
          </Text>
        </View>
      </View>

      <ModalCarousel
        images={images}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: "100%",
  },
  imageContent: { width: "100%", height: 200 },
  titleContent: {
    width: "100%",
    height: 100,
    marginHorizontal: 30,
    marginTop: 30,
    padding: 10,
  },
  descriptionContent: {
    height: 100,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  overlayContent: {
    flex: 1,
    position: "absolute",
    zIndex: 100,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  count: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 139, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default InstalacioneDesc;
