import { Text, View } from "react-native";
import ButtonBackComponent from "../../components/ButtomBackComponent";

const MenuCCScreen = ({ navigation }: any) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ButtonBackComponent onPress={() => navigation.pop()} icon={"left"} />
      <Text>menus</Text>
    </View>
  );
};

export default MenuCCScreen;
