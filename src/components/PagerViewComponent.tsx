import React, { useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import PagerView from "react-native-pager-view";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";

import FONTS from "./util/Fonts";
import COLORS from "./util/Colors";

const PagerViewComponent = () => {
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

const Page = ({ backgroundColor, icon, title, desc }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Icon name={icon} size={70} color={COLORS.primaryO} />
      <View style={{ marginTop: 16 }}>
        <Text style={[FONTS.title, { color: COLORS.primaryO }]}>{title}</Text>
      </View>
      <View style={{ marginTop: 16, marginHorizontal: 20 }}>
        <Text
          style={[FONTS.body, { color: COLORS.primaryO, textAlign: "justify" }]}
        >
          {desc}
        </Text>
      </View>
    </View>
  );
};

const RoundedButton = ({ label, onPress, icon }: any) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <AntDesign name={icon} size={24} color={COLORS.primaryO} />
      {/*<Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
        {label}
  </Text>*/}
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
        height: 60,
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
          height: 60,
          width: windowWidth,
          backgroundColor,
          opacity: 0.8,
          alignItems: "center",
          paddingHorizontal: FOOTER_PADDING,
        }}
      >
        {leftButtonLabel && (
          <RoundedButton
            label={leftButtonLabel}
            onPress={leftButtonPress}
            icon={"left"}
          />
        )}
        <RoundedButton
          label={rightButtonLabel}
          onPress={rightButtonPress}
          icon={"right"}
        />
      </View>
    </View>
  );
};

export { Footer, Page };
