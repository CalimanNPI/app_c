import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { openURL } from "expo-linking";
import Layout from "../../components/Layout";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";

import { reglamentos } from "../../components/util/data";

const ReglamentoScreen = () => {
  const _handleOpen = (pdf: string) => {
    openURL(pdf);
  };

  return (
    <Layout>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reglamentos}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => _handleOpen(item.pdf)}
            >
              <View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </View>
              <View style={styles.cardContent}>
                <Text
                  style={[
                    FONTS.subTitle,
                    { color: COLORS.gray, textAlign: "auto" },
                  ]}
                >
                  {item.title}
                </Text>
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
    marginVertical: 5,
    backgroundColor: COLORS.white,
    flexBasis: "45%",
    marginHorizontal: 5,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContent: {
    padding: 17,
    justifyContent: "space-between",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
    resizeMode: "cover",
  },
});

export default ReglamentoScreen;
