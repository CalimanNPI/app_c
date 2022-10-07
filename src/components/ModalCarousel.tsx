import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
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
        {modalVisible ? <StatusBar backgroundColor={"rgba(255, 59, 48, 0.4)"}/> : <StatusBar backgroundColor={"rgba(255, 59, 48, 0.9)"}/>}
      
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.buttomCloaseModal}
          >
            <AntDesign name="close" size={30} color="#FF3B30" />
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
                const inputRange = [
                  width * (index - 0.5),
                  width * index,
                  width * (index + 0.5),
                ];
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
                        styles.titleContainer,
                        {
                          opacity: scrollAnimation.interpolate({
                            inputRange,
                            outputRange: [0, 1, 0],
                          }),
                          transform: [
                            {
                              translateX: scrollAnimation.interpolate({
                                inputRange,
                                outputRange: [250, 0, -250],
                              }),
                            },
                          ],
                        },
                      ]}
                    >
                      <Text style={styles.textTitle}>{item.title}</Text>
                    </Animated.View>
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
  },
  item: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width,
    height,
  },
  itemOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  titleContainer: {
    position: "absolute",
    bottom: 100,
    zIndex: 1,
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#F2F2F7",
    fontSize: 24,
    textAlign: "justify",
  },
  /**Modal */
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(142, 142, 147, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
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
    zIndex: 2,
  },
});

export default ModalCarousel;
