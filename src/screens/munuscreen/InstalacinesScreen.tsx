import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/Layout";
import FONTS from "../../components/util/Fonts";
import COLORS from "../../components/util/Colors";

import { instalaciones } from "../../components/util/data";

const InstalacionesScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <FlatList
        data={instalaciones}
        style={{ marginTop: 10 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={({ item }: any) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("InstalacioneDesc", {
                  id: item.id,
                  title: item.title,
                  desc: item.description,
                  images: item.image,
                  time: item.time,
                })
              }
            >
              <Image
                style={styles.cardImage}
                source={{ uri: item.image[0]["image"] }}
              />
              <View style={styles.cardHeader}>
                <View>
                  <Text style={[FONTS.subTitle, { color: COLORS.gray }]}>
                    {item.title}
                  </Text>
                  <Text style={[FONTS.body, { color: COLORS.gray }]}>
                    {item.description}
                  </Text>
                  <View style={styles.timeContainer}>
                    <AntDesign style={styles.iconData} name="calendar" />
                    <Text style={[FONTS.desc, { color: COLORS.gray }]}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  separator: { padding: 5, backgroundColor: COLORS.white },
  card: {
    shadowRadius: 4,
    backgroundColor: COLORS.white,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },

  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },

  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
    fontSize: 15,
    color: COLORS.primaryR,
  },
  timeContainer: {
    flexDirection: "row",
  },
});

export default InstalacionesScreen;
