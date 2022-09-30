import React from "react";
import { Text, View, StyleSheet } from "react-native";

const InstalacionesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.textTitle}>InstalacionesScreen</Text>
    </View>
  );
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
export default InstalacionesScreen;
