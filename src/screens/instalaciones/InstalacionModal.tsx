import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import ButtonBackComponent from "../../components/ButtomBackComponent";
const { width, height } = Dimensions.get("window");

function InstalacionModal({ navigation, route }: any) {
  const scrollAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.screen}>
          <ButtonBackComponent
            onPress={() => navigation.pop()}
            icon={"close"}
          />
          <Animated.FlatList
            data={route.params}
            bounces={false}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index): any => index}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.item}>
                  <Animated.Image
                    source={{ uri: item }}
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
                    style={[StyleSheet.absoluteFillObject, styles.itemOverlay]}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
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
    zIndex: 1,
  },
});

export default InstalacionModal;
