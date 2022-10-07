import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LoginScreen from "./perfilscreen/LoginScreen";

const PerfilScreen = () => {
  return <LoginScreen />;
};

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
    textAlign: "left",
  },
  textText: {
    fontFamily: "SpaceMono_400Regular",
    color: "#8E8E93",
    fontSize: 14,
    textAlign: "justify",
  },
});
export default PerfilScreen;
