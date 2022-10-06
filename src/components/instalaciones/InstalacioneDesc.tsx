import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Layout from "../Layout";

const InstalacioneDesc = ({ route }: any) => {
  const [isVisible, setIsVisible] = useState(false);

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
          <FlatList
            data={route.params.images}
            horizontal={false}
            numColumns={2}
            scrollEnabled={false}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => setIsVisible(true)}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.img }}
                    />
                  </View>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isVisible}
                    onRequestClose={() => setIsVisible(true)}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <TouchableOpacity
                          onPress={() => setIsVisible(false)}
                          style={styles.buttomCloaseModal}
                        >
                        <Text>X</Text>
                        </TouchableOpacity>
                        <Image
                          source={{ uri: item.img }}
                          style={{ width: 150, height: 150 }}
                        />
                      </View>
                    </View>
                  </Modal>
                </TouchableOpacity>
              );
            }}
          />
        </View>
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
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: "45%",
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: "space-between",
  },
  cardImage: {
    flex: 1,
    height: 150,
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "100%",
    position: "relative",
    bottom: 0,
    margin: 20,
    backgroundColor: "#F2F2F7",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttomCloaseModal: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});

export default InstalacioneDesc;
