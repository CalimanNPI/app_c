import React, { useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import PagerView from "react-native-pager-view";
import { Feather as Icon } from "@expo/vector-icons";

const Onboarding1 = () => {
  const pagerRef = useRef(null);
  const handlePageChange = (pageNumbre: any) => {
    pagerRef.current.setPage(pageNumbre);
  };

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key={1}>
          <Page backgroundColor={"#ffc93c"} icon={"sun"} title={"Holi k"} />
          <Footer
            backgroundColor="#ffc93c"
            rightButtonLabel="Next"
            rightButtonPress={() => handlePageChange(1)}
          />
        </View>
        <View key={2}>
          <Page backgroundColor={"blue"} icon={"sun"} title={"Holi k"} />
          <Footer
            backgroundColor="#ffc93c"
            rightButtonLabel="Next"
            rightButtonPress={() => handlePageChange(1)}
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
          />
        </View>
      </PagerView>
    </View>
  );
};

const Page = ({ backgroundColor, icon, title }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Icon name={icon} size={172} color="white" />
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const RoundedButton = ({ label, onPress }: any) => {
  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Footer = ({
  backgroundColor,
  leftButtonLabel = false,
  leftButtonPress = false,
  rightButtonLabel = false,
  rightButtonPress = false,
}: any) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: HEIGHT,
        width:windowWidth,

        backgroundColor,
        opacity: 0.6,
        alignItems: "center",
        paddingHorizontal: FOOTER_PADDING,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: HEIGHT,
          width:windowWidth,

          backgroundColor,
          opacity: 0.6,
          alignItems: "center",
          paddingHorizontal: FOOTER_PADDING,
        }}
      >
        {leftButtonLabel && (
          <RoundedButton label={leftButtonLabel} onPress={leftButtonPress} />
        )}
        <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />
      </View>
    </View>
  );
};

export default Onboarding;
