import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  Dimensions,
  Pressable,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const defaultProps = {
  title: "",
  animationType: "slide",
  haveOutsideTouch: false,
  data: [
    {
      id: 8,
      title: "historia",
    },
    {
      id: 7,
      title: "horarios",
    },
    {
      id: 6,
      title: "cuotas",
    },
    {
      id: 4,
      title: "actividades deportivas",
    },
    {
      id: 3,
      title: "instalaciones",
    },
    {
      id: 2,
      title: "reglamentos",
    },
    {
      id: 1,
      title: "cafetería",
    },
    {
      id: 99,
      title: "",
    },
    {
      id: 999,
      title: "",
    },
  ],
  dataTramites: [
    {
      id: 9,
      title: "Usuario Institucional",
    },
    {
      id: 10,
      title: "Usuario Especial",
    },
    {
      id: 11,
      title: "Pase de visita",
    },
  ],
};

const MenuModal = ({
  show,
  title,
  closePopup,
  haveOutsideTouch,
}: any) => {
  const renderItem = ({ item }: any) => {
    if (item.title == "") {
      return <View style={styles.emtyElement}></View>;
    }
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(item.title)}
        style={styles.containerItem}
      >
        <View style={styles.containerIcon}>
          <AntDesign name="codesquareo" size={24} color="#FF3B30" />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    const { data, dataTramites } = defaultProps;
    return (
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={3}
        />
        <FlatList
          data={dataTramites}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={3}
        />
      </View>
    );
  };

  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={show}
      onRequestClose={() => {}}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(142, 142, 147, 0.4)" }}>
        <Pressable
          onPress={() => {
            if (!haveOutsideTouch) return;
            closePopup();
          }}
          style={{ flex: 1 }}
        ></Pressable>

        <View style={styles.containerMenu}>
          <Text
            style={[
              {
                fontSize: 24,
                margin: 10,
                textAlign: "center",
              },
            ]}
          >
            {title}
          </Text>
          {renderContent()}
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  containerMenu: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#F2F2F7",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // height: Dimensions.get('window').height * 0.4,
    maxHeight: Dimensions.get("window").height * 0.8,
  },
  title: {
    fontFamily:  "monospace",
    fontSize: 12,
    marginLeft: 18,
    fontWeight: "bold",
    color: "#8E8E93",
    textTransform: "uppercase",
    textAlignVertical: "center",
    paddingTop: 5,
  },
  containerIcon: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#F2F2F7",
    shadowColor: "#242426",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerItem: {
    height: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#F2F2F7",
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  emtyElement: {
    height: 60,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
};
export default MenuModal;