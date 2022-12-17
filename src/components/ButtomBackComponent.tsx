import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import COLORS from "./util/Colors";

const ButtonBackComponent = ({ onPress, icon }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <AntDesign name={icon} size={30} color={COLORS.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 2,
    //backgroundColor: "transparent",
    backgroundColor: COLORS.grayT0_3,
    borderRadius: 10,
    padding: 10,
  },
});

export default ButtonBackComponent;
