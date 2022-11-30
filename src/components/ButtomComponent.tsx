import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import COLORS from "./util/Colors";
import Colors from "./util/Colors";
import FONTS from "./util/Fonts";

const SIZES = ["small", "medium", "large"];
const TYPES = [
  "primary",
  "secondary",
  "accent",
  "error",
  "warning",
  "info",
  "success",
  "primaryR",
];
const ROUNDED = ["small", "medium", "large"];

export default function ButtomComponent({
  children,
  onPress,
  type,
  size,
  label,
  rounded,
}: any) {
  const btnSize = SIZES.includes(size) ? size : "small";
  const btnType = TYPES.includes(type) ? type : "primary";
  const btnRound = ROUNDED.includes(rounded) ? rounded : "small";

  const btnStyle = {
    height: 50,
    width: btnSize === "large" ? "80%" : btnSize === "medium" ? 210 : "auto",
    borderRadius: btnRound === "small" ? 5 : btnRound === "medium" ? 10 : 20,
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      btnType === "primary"
        ? Colors.primary
        : btnType === "secondary"
        ? Colors.secondary
        : btnType === "accent"
        ? Colors.accent
        : btnType === "error"
        ? Colors.error
        : btnType === "warning"
        ? Colors.warning
        : btnType === "info"
        ? Colors.info
        : btnType === "primaryR"
        ? Colors.primaryR
        : Colors.success,
  };

  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={[FONTS.subTitle, {color: COLORS.white}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
