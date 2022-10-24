import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import ModalViewDesc from "../ModalDescView";
import COLORS from "../util/Colors";
import FONTS from "../util/Fonts";

const NotifyItem = ({ item }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {item.isSend && (
        <TouchableOpacity
          onPress={() =>
            item.desc ? setModalVisible(true) : setModalVisible(false)
          }
          style={styles.card}
        >
          <View style={{ width: "20%" }}>
            <FontAwesome name={"bell-o"} style={styles.icon} />
          </View>
          <View style={styles.distributor}>
            <Text style={[FONTS.subTitle, { color: COLORS.gray }]}>
              {item.title}
            </Text>
            <Text style={[FONTS.body, { color: COLORS.gray }]}>
              {item.body}
            </Text>
            <Text style={[FONTS.body, { color: COLORS.primaryR }]}>
              {item.n_type}
            </Text>
          </View>
          <ModalViewDesc
            title={item.title}
            desc={item.desc}
            imageUri={item.iconName}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  distributor: {
    width: "80%",
    alignItems: "flex-start",
  },
  icon: {
    color: COLORS.primaryR,
    fontSize: 50,
    textAlign: "center",
  },
});

export default NotifyItem;
