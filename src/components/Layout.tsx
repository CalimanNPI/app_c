import React from "react";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import COLORS from "./util/Colors";

const Layout = ({ children }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryR} />
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    //backgroundColor: COLORS.primaryRLightT0_015,
  },
});

export default Layout;
