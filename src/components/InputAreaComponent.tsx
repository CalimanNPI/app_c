import React from "react";
import {  StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import COLORS from "./util/Colors";

const InputAreaComponent = ({
  onChangeText,
  placeholder,
  keyboardType,
  icon,
  value,
}: any) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder={placeholder}
        keyboardType={keyboardType}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
        numberOfLines={5}
        multiline={true}
      />
    <AntDesign style={styles.inputIcon}  name={icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    width: 350,
    height: 150,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  inputs: {
    height: 200,
    marginLeft: 16,
    borderBottomColor: COLORS.white,
    flex: 1,
    fontFamily: "SpaceMono_700Bold",
    color: COLORS.gray,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
    fontSize: 25,
    color: COLORS.gray,
  },
});

export default InputAreaComponent;
