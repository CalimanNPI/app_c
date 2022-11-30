import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "./util/Colors";

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

const AlertComponent = ({ label, type }: any) => {
  const bType = TYPES.includes(type) ? type : "primary";

  const bcolor =
    bType === "primary"
      ? COLORS.primary
      : bType === "secondary"
      ? COLORS.secondary
      : bType === "accent"
      ? COLORS.accent
      : bType === "error"
      ? COLORS.error
      : bType === "warning"
      ? COLORS.warning
      : bType === "info"
      ? COLORS.info
      : bType === "primaryR"
      ? COLORS.primaryR
      : COLORS.success;

  return (
    <View style={[styles.card, { borderColor: bcolor }]}>
      <AntDesign name="infocirlce" size={24} color={bcolor} />
      <View style={styles.cardContent}>
        <Text style={[styles.description]}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: "white",
    flexBasis: "10%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeftWidth: 6,
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    flex: 1,
    color: COLORS.gray,
    fontFamily: "SpaceMono_400Regular",
    fontWeight: "bold",
  },
});

export default AlertComponent;
