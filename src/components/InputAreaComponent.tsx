import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "./util/Colors";
import FONTS from "./util/Fonts";

const InputAreaComponent = ({
  onChangeText,
  placeholder,
  keyboardType,
  icon,
  value,
  colorText,
  colorIcon,
}: any) => {
  const textColor =
    colorText === "white"
      ? COLORS.white
      : colorText === "gray"
      ? COLORS.gray
      : colorText === "grayT0_3"
      ? COLORS.grayT0_3
      : colorText === "primaryR"
      ? COLORS.primaryR
      : colorText === "primaryO"
      ? COLORS.primaryO
      : COLORS.primaryB;

  const iconColor =
    colorIcon === "white"
      ? COLORS.white
      : colorIcon === "gray"
      ? COLORS.gray
      : colorIcon === "grayT0_3"
      ? COLORS.grayT0_3
      : colorIcon === "primaryR"
      ? COLORS.primaryR
      : colorIcon === "primaryO"
      ? COLORS.primaryO
      : COLORS.primaryB;
  return (
    <View style={styles.inputContainer}>
      <Text style={[FONTS.body, { color: textColor }]}>{placeholder}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[
            styles.inputs,
            { borderBottomColor: iconColor, borderBottomWidth: 2 },
          ]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={iconColor}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          value={value}
          numberOfLines={5}
          multiline={true}
        />
        <AntDesign
          style={[styles.inputIcon, { color: iconColor }]}
          name={icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 200,
    marginVertical: 20,
    flexDirection: "column",
    backgroundColor: "transparent",
    marginLeft: 16,
    //shadowColor: COLORS.gray,
    //shadowOffset: {
    //  width: 0,
    //  height: 2,
    //},
    //shadowOpacity: 0.25,
    //shadowRadius: 3.84,
    //elevation: 15,
  },
  inputs: {
    flex: 1,
    height: 200,
    fontFamily: "SpaceMono_700Bold",
    color: COLORS.gray,
  },
  inputIcon: {
    marginHorizontal: 15,
    fontSize: 25,
    color: COLORS.primaryR,
  },
});

export default InputAreaComponent;
