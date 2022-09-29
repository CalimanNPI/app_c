import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const Layout = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FF3B30"} />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Layout;
