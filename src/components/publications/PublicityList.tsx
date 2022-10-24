import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FONTS from "../util/Fonts";
import COLORS from "../util/Colors";

const { width } = Dimensions.get("window");

const SPACING = 10;
const ITEM_LENGTH = Platform.OS === "ios" ? width * 0.82 : width * 0.84;
const BORDER_RADIUS = 20;

const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;

const PublicityList = ({ item }: any) => {
  const navigation = useNavigation();

  const [datas, setDatas] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setDatas([
      { _id: "empty_l12", title: "empty" },
      ...item,
      { _id: "empty_r34", title: "empty" },
    ]);
  }, [item]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={datas}
        keyExtractor={(data: any) => data._id}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.2}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_LENGTH}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }: any) => {
          if (item.title === "empty") {
            return <View style={{ width: EMPTY_ITEM_LENGTH }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_LENGTH,
            (index - 1) * ITEM_LENGTH,
            index * ITEM_LENGTH,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: "clamp",
          });

          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PublicityDesc", { id: item._id })
              }
              style={styles.content}
            >
              <Animated.View
                style={[{ transform: [{ translateY }] }, styles.card]}
              >
                <Image source={{ uri: item.img_url }} style={styles.img} />

                <View style={styles.containerText}>
                  <Text style={[FONTS.title, { color: COLORS.white }]}>
                    {item.title}
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    alignItems: "center",
  },
  content: {
    width: ITEM_LENGTH,
    marginBottom: 100,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    marginHorizontal: SPACING,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS / 2,
  },
  img: {
    width: "100%",
    height: ITEM_LENGTH * 0.67,
    borderTopLeftRadius: BORDER_RADIUS / 2,
    borderTopRightRadius: BORDER_RADIUS / 2,
    resizeMode: "cover",
  },
  containerText: {
    backgroundColor: COLORS.primaryR,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: BORDER_RADIUS / 3,
    borderBottomRightRadius: BORDER_RADIUS / 3,
  },
});

export default PublicityList;
