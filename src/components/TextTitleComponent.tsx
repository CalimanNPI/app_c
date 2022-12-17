import { Text } from "react-native";
import FONTS from "./util/Fonts";

const TitleComponent = ({ text }: any) => {
  return (
    <Text
      style={[
        FONTS.subTitle,
        { marginLeft: 20, fontSize: 18, marginVertical: 20 },
      ]}
    >
      {text}
    </Text>
  );
};

export default TitleComponent;
