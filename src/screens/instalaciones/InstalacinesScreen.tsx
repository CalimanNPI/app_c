import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Layout from "../../components/Layout";
import FONTS from "../../components/util/Fonts";
import COLORS from "../../components/util/Colors";

import { instalaciones } from "../../components/util/data";

const InstalacionesScreen = ({ navigation }: any) => {
  return (
    <Layout>
      <FlatList
        data={instalaciones}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={({ item }: any) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.push("InstalacioneDesc", {
                  id: item.id,
                })
              }
            >
              <Image style={styles.cardImage} source={{ uri: item.image[1] }} />
              <View style={styles.cardHeader}>
                <View>
                  <Text style={[FONTS.subTitle, { color: COLORS.primaryR }]}>
                    {item.title}
                  </Text>
                  <Text style={[FONTS.body, { color: COLORS.gray }]}>
                    {item.description}
                  </Text>
                  <View style={styles.timeContainer}>
                    <Feather name="calendar" style={styles.iconData} />
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
  card: {
    shadowRadius: 4,
    backgroundColor: COLORS.white,
    marginTop: 10,
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
    alignItems: "center",
    marginTop: 5,
  },
});

export default InstalacionesScreen;
