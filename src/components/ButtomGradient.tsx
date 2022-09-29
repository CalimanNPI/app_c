import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ButtomGradient = ({ onPress, textButton }: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={["#FF3B30", "#FF9500" /*, "#FFCC00"*/]}
        style={styles.button}
      >
        <Text style={[ styles.textTitle,{ color: "#F2F2F7" }]}>{textButton}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5,
    elevation: 2,
  },
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 20,
    textAlign: "justify",
  },
});

export default ButtomGradient;
