import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Layout from "../Layout";
import ModalCarousel from "../ModalCarousel";

const InstalacioneDesc = ({ route }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const images = route.params.images;

  return (
    <ScrollView>
      <Layout>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{route.params.title}</Text>
          </View>
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>
              {route.params.desc}
              {route.params.desc}
              {route.params.desc}
              {route.params.desc}
            </Text>
          </View>
          <View style={styles.row}>
            {images.map((value: any, index: number) => {
              if (index < 2) {
                return (
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={[styles.imageContent, styles.imageContent1]}
                    key={value["id"]}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: value["image"] }}
                    />
                  </TouchableOpacity>
                );
              }
            })}

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={[styles.imageContent, styles.imageContent1]}
            >
              <Image
                style={styles.image}
                source={{ uri: images[2]["image"] }}
              />
              <View style={styles.overlayContent}>
                <View>
                  <Text style={styles.count}>+{images.length - 2}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ModalCarousel
          images={images}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
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
  postContent: {
    flex: 1,
    padding: 30,
    backgroundColor: "#F2F2F7",
    marginVertical: 10,
  },
  postTitle: {
    fontSize: 14,
    color: "#8E8E93",
    fontFamily: "SpaceMono_700Bold",
  },

  card: {
    marginVertical: 2,
    backgroundColor: "white",
    flexBasis: "45%",
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: "space-between",
  },
  cardImage: {
    flex: 1,
    height: 100,
    width: null,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  separator: {
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
  },

  imageContent: {
    height: 120,
  },
  imageContent1: {
    width: "30%",
    height: 100,
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  overlayContent: {
    flex: 1,
    position: "absolute",
    zIndex: 100,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 50,
    color: "#ffffff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 139, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default InstalacioneDesc;
