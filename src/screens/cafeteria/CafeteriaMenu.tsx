import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { menus } from "../../components/util/data";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";

const MenusItems = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={menus}
      keyExtractor={(item: any) => item.id}
      renderItem={({ item }: any) => {
        return (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.push(item.link)}
          >
            <View style={styles.contentCard}>
              {/*<AntDesign name="dotchart" size={30} color={COLORS.white} />*/}
              <Image
                source={{ uri: item.icon }}
                style={{ width: 35, height: 35 }}
                resizeMode={"cover"}
              />
              <View style={styles.contentText}>
                <Text
                  style={[FONTS.body, { color: COLORS.white, marginBottom: 3 }]}
                >
                  {item.title}
                </Text>
                <Text style={[FONTS.desc, { color: COLORS.white }]}>
                  {item.desc}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 170,
    backgroundColor: COLORS.primaryB,
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  contentCard: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    left: 15,
    bottom: 15,
    width: "100%",
  },
  contentText: { flexDirection: "column", marginTop: 3 },
});

export default MenusItems;
