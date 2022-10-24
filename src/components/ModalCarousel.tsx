import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import COLORS from "./util/Colors";
const { width, height } = Dimensions.get("window");

const ModalCarousel = ({ images, modalVisible, setModalVisible }: any) => {
  const scrollAnimation = React.useRef(new Animated.Value(0)).current;

  return (
    <Modal
      animationType="fade"
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
            <AntDesign name="close" size={40} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.screen}>
            <Animated.FlatList
              data={images}
              bounces={false}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.item}>
                    <Animated.Image
                      source={{ uri: item.image }}
                      style={[
                        styles.image,
                        {
                          transform: [
                            {
                              translateX: scrollAnimation.interpolate({
                                inputRange: [
                                  width * (index - 1),
                                  width * index,
                                  width * (index + 1),
                                ],
                                outputRange: [-width * 0.5, 0, width * 0.5],
                              }),
                            },
                          ],
                        },
                      ]}
                    />
                    <Animated.View
                      style={[
                        StyleSheet.absoluteFillObject,
                        styles.itemOverlay,
                      ]}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  item: {
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width,
    height,
  },
  itemOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  image: {
    width,
    height: height / 2,
    resizeMode: "cover",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
  },
  buttomCloaseModal: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 2,
  },
});

export default ModalCarousel;
