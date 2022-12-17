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
import FONTS from "../../components/util/Fonts";

import { reglamentos } from "../../components/util/data";
import COLORS from "../../components/util/Colors";

const ReglamentoScreen = () => {
  const _handleOpen = (pdf: string) => {
    openURL(pdf);
  };

  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <FlatList
          data={reglamentos}
          keyExtractor={(item: any) => {
            return item.id;
          }}
          renderItem={({ item }: any) => {
            return (
              <TouchableOpacity onPress={() => _handleOpen(item.pdf)}>
                <View style={styles.row}>
                  <Image source={{ uri: item.image }} style={styles.pic} />
                  <View>
                    <View style={styles.nameContainer}>
                      <Text
                        style={[FONTS.body, { textAlign: "left" }]}
                        numberOfLines={4}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.grayT0_3,
    backgroundColor:  COLORS.white,
    borderBottomWidth: 1,
    padding: 10,
    paddingRight: 15,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    width: 300,
    marginLeft: 15,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ReglamentoScreen;
