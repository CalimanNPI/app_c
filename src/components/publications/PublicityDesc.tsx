import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { getPublicityDesc } from "../../api/api";
import Layout from "../Layout";

const imageUri = "http://192.168.1.243/api_cdc/public/img/anuncios8.jpg";
const AnimatedImage = Animated.createAnimatedComponent(Image);
const { width, height } = Dimensions.get("window");

const PublicityDesc = ({ route }: any) => {
  const [publicity, setPublicity] = useState([]);

  const getPublicity = async () => {
    const data = await getPublicityDesc(route.params.id);
    setPublicity(data.data);
  };

  useEffect(() => {
    getPublicity();
  }, []);

  return (
    <Layout>
      <PublicityItemDesc item={publicity} />
    </Layout>
  );
};

const PublicityItemDesc = ({ item }: any) => {
  return (
    <SafeAreaView>
      <Animated.FlatList
        scrollEventThrottle={16}
        data={item}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item._id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const renderItem = ({ item, route }: any) => {
  return (
    <View style={{ marginVertical: 25 }}>
      <View style={styles.lineStyle}></View>
      <View
        style={{
          width: "100%",
          height: 200,
          zIndex: 2,
        }}
      >
        <ImageZoom image={item.img_url} />
      </View>
      <View style={styles.lineStyle}></View>
      <Text style={styles.textTitle}>{item.title}</Text>
      <View style={styles.lineStyle}></View>
      <Text style={styles.textText}>{item.body}</Text>
      <Text style={styles.textText}>{item.description}</Text>
      <View style={styles.lineStyle}></View>
    </View>
  );
};

const ImageZoom = ({ image }: any) => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: (event) => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ],
    };
  });

  const focalPoinStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.View style={{ flex: 1 }}>
        <AnimatedImage style={[{ flex: 1 }, rStyle]} source={{ uri: image }} />
        <Animated.View
          style={[
            focalPoinStyle,
            {
              ...StyleSheet.absoluteFillObject,
              width: 20,
              height: 20,
              backgroundColor: "rgba(229,229,234, 0.5)",
              borderRadius: 10,
            },
          ]}
        />
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 5,
    borderColor: "rgba(229,229,234, 0.9)",
    backgroundColor: "rgba(229,229,234, 0.9)",
    marginVertical: 5,
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 35,
    textAlign: "center",
    margin: 20,
  },
  textText: {
    fontFamily: "SpaceMono_400Regular",
    color: "#8E8E93",
    fontSize: 14,
    textAlign: "justify",
    margin: 20,
  },
});

export default PublicityDesc;
