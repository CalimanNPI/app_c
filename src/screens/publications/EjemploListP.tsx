import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../components/util/Colors";

const slides = [
  {
    id: "1",
    image: require("../../../assets/Onboarding/Inicio-3.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("../../../assets/Onboarding/Inicio-2.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../../../assets/Onboarding/Inicio-1.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const { width, height } = Dimensions.get("window");
const ITEM_LENGTH = Platform.OS === "ios" ? width * 0.82 : width * 0.84;

const Ejemplo = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primaryR,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, width: ITEM_LENGTH }}
    >
      <StatusBar backgroundColor={COLORS.primaryR} />
      <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const Slide = ({ item }: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        width: ITEM_LENGTH,
        backgroundColor: COLORS.blak,
      }}
    >
      <Image
        source={item?.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.primaryR,
    fontSize: 12,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: COLORS.primaryR,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    fontFamily: "SpaceMono_700Bold",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.gray,
    marginHorizontal: 3,
    borderRadius: 20,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.primaryR,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.primaryR,
  },
});

export default Ejemplo;
