import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const menu = [
  {
    id: "1",
    image: require("../../assets/Onboarding/1.png"),
    title: "Increase",
    route: "Galery",
  },
];

const ButtomMenu = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View style={{ margin: 10 }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            backgroundColor: "blue",
          }}
        ></View>
        <Text style={styles.textTitle}>Holi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "center",
  },
});
export default ButtomMenu;
