import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import ModalViewDesc from "../ModalDescView";

const NotifyItem = ({ item }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <View style={styles.lineStyle}/>
      {item.isSend && item.title && (
        <TouchableOpacity
          onPress={() =>
            item.desc != null ? setModalVisible(true) : setModalVisible(false)
          }
          style={styles.card}
        >
          <View style={{ width: "20%" }}>
            <FontAwesome name={"bell-o"} style={styles.img} />
          </View>
          <View style={styles.distributor}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textText}>{item.body}</Text>
            <Text
              style={[
                styles.textText,
                { color: "#FF3B30", fontFamily: "SpaceMono_700Bold" },
              ]}
            >
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

  /**Card N*/
  card: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F7", 
    marginVertical: 8
  },
  distributor: {
    width: "80%",
    paddingHorizontal: 15,
    alignItems: "flex-start",
  },
  img: {
    color: "#FF3B30",
    fontSize: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "left",
  },
  textText: {
    fontFamily: "SpaceMono_400Regular",
    color: "#8E8E93",
    fontSize: 14,
    textAlign: "justify",
  },

});

export default NotifyItem;
