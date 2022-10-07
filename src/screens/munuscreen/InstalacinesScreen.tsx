import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/Layout";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "2018-08-01 12:15 pm",
    image: [
      {
        id: 1, 
        title: "Lorem ipsum dolor",
        image: "http://192.168.1.243/api_cdc/public/menus/img/dia.png",
      },
      {
        id: 2, 
        title: "Lorem ipsum dolor",
        image: "http://192.168.1.243/api_cdc/public/menus/img/comidas.png",
      },
      {
        id: 3, 
        title: "Lorem ipsum dolor",
        image: "http://192.168.1.243/api_cdc/public/menus/img/desayunos.png",
      },
      {
        id: 4, 
        title: "Lorem ipsum dolor",
        image: "http://192.168.1.243/api_cdc/public/menus/img/fast.png",
      },
      {
        id: 5, 
        title: "Lorem ipsum dolor",
        image: "http://192.168.1.243/api_cdc/public/menus/img/infantil.png",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula...",
  },
];

const InstalacionesScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <FlatList
        data={data}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("InstalacioneDesc", {
                  id: item.id,
                  title: item.title,
                  desc: item.description,
                  images: item.image,
                })
              }
            >
              <Image
                style={styles.cardImage}
                source={{ uri: item.image[0]["image"] }}
              />
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={styles.timeContainer}>
                    <Image
                      style={styles.iconData}
                      source={{
                        uri: "https://img.icons8.com/color/96/3498db/calendar.png",
                      }}
                    />
                    <Text style={styles.time}>{item.time}</Text>
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
  /******** card **************/
  card: {
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "#F2F2F7",
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

  /******** card components **************/
  title: {
    fontSize: 18,
    fontFamily: "SpaceMono_700Bold",
    color: "#FF3B30",
    flex: 1,
  },
  description: {
    fontSize: 14,
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    marginTop: 5,
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
  },
  timeContainer: {
    flexDirection: "row",
  },
});

export default InstalacionesScreen;
