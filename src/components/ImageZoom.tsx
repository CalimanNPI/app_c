import { Dimensions, Image, StyleSheet } from "react-native";
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

const AnimatedImage = Animated.createAnimatedComponent(Image);
const { width, height } = Dimensions.get("window");

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
      <Animated.View style={{ flex: 1, zIndex: 2 }}>
        <AnimatedImage style={[{ flex: 1 }, rStyle]} source={{ uri: image }} />
        <Animated.View
          style={[
            focalPoinStyle,
            {
              ...StyleSheet.absoluteFillObject,
              width: 25,
              height: 25,
              backgroundColor: "rgba(229,229,234, 0.5)",
              borderRadius: 10,
            },
          ]}
        />
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default ImageZoom;
