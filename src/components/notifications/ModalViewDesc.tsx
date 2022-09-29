import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const ModalViewDesc = ({
  title,
  desc,
  imageUri,
  modalVisible,
  setModalVisible,
}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(true)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.buttomCloaseModal}
          >
            <AntDesign name="close" size={30} color="#FF3B30" />
          </TouchableOpacity>
          <Image source={{ uri: imageUri }} style={styles.imgModal} />
          <Text style={[styles.textTitle, { marginTop: 20, fontSize: 25 }]}>
            {title}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[{ marginTop: 30 }, styles.textText]}>{desc}</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imgModal: {
    width: "100%",
    height: "25%",
    resizeMode: "contain",
    marginTop: 20,
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "justify",
  },
  textText: {
    fontFamily: "SpaceMono_400Regular",
    color: "#8E8E93",
    fontSize: 14,
    textAlign: "justify",
  },
  /**Modal */
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
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
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

export default ModalViewDesc;
