import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";

const Layout = ({ children }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#FF3B30"} />
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(142, 142, 147, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Layout;
