import { StyleSheet, View } from "react-native";
import COLORS from "./util/Colors";
import { LinearGradient } from "expo-linear-gradient";

const CardGradientComponent = ({ children }: any) => {
  return (
    <LinearGradient colors={["#ff3b30", "#ffa330"]} style={styles.card}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 20,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  containerText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default CardGradientComponent;
