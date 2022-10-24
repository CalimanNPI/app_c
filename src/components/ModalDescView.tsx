import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FONTS from "./util/Fonts";
import COLORS from "./util/Colors";

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
      {modalVisible ? (
        <StatusBar backgroundColor={COLORS.primaryRLight} />
      ) : (
        <StatusBar backgroundColor={COLORS.primaryR} />
      )}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.buttomCloaseModal}
          >
            <AntDesign name="close" size={30} color={COLORS.primaryR} />
          </TouchableOpacity>
          <Image source={{ uri: imageUri }} style={styles.imgModal} />
          <Text style={[FONTS.title, { marginTop: 20, color: COLORS.gray }]}>
            {title}
          </Text>
          <Text style={[{ marginTop: 30, color: COLORS.gray }, FONTS.body]}>
            {desc}
          </Text>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
    padding: 20,
  },
  buttomCloaseModal: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});

export default ModalViewDesc;
