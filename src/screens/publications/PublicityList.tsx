import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../components/util/Colors";
import { getPublicity } from "../../api/api";

const { width, height } = Dimensions.get("window");

const SPACING = 10;
const ITEM_LENGTH = Platform.OS === "ios" ? width * 0.82 : width * 0.84;
const BORDER_RADIUS = 20;

const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;

const PublicityList = () => {
  const navigation = useNavigation();

  const [publicitys, setPublicitys] = useState([]);

  const getPu = async () => {
    const data = await getPublicity();
    setPublicitys(data.data);
  };

  const [datas, setDatas] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  useEffect(() => {
    getPu();
    setDatas([
      { _id: "empty_l12", title: "empty" },
      ...publicitys,
      { _id: "empty_r34", title: "empty" },
    ]);
  }, [publicitys]);

  const Footer = () => {
    return (
      <View
        style={{
          height: 50,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
           
          }}
        >
          {/* Render indicator */}
          {publicitys.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primaryR,
                 // width: 25,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

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
        onMomentumScrollEnd={updateCurrentSlideIndex}
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
            outputRange: [20, 10, 20],
            extrapolate: "clamp",
          });

          return (
            <TouchableOpacity
              onPress={() => navigation.push("PublicityDesc", { id: item._id })}
              style={styles.content}
            >
              <Animated.View
                style={[{ transform: [{ translateY }] }, styles.card]}
              >
                <Image source={{ uri: item.img_url }} style={styles.img} />
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    alignItems: "center",
    height: 190
  },
  content: {
    width: ITEM_LENGTH,
  },
  card: {
    marginHorizontal: SPACING,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS / 2,
  },
  img: {
    width: "100%",
    height: ITEM_LENGTH * 0.4,
    borderRadius: BORDER_RADIUS / 3,
    resizeMode: "cover",
  },
  containerText: {
    backgroundColor: COLORS.primaryR,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: BORDER_RADIUS / 3,
    borderBottomRightRadius: BORDER_RADIUS / 3,
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.grayT0_3,
    marginHorizontal: 3,
    borderRadius: 20,
  },
});

export default PublicityList;
