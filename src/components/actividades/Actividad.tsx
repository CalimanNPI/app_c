import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import COLORS from "../util/Colors";

import { setActividad } from "../../api/api";

const data = [
  {
    id: 1,
    icon: "https://img.icons8.com/color/70/000000/cottage.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/color/70/000000/administrator-male.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/color/70/000000/filled-like.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/color/70/000000/facebook-like.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/color/70/000000/shutdown.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/color/70/000000/traffic-jam.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 7,
    icon: "https://img.icons8.com/dusk/70/000000/visual-game-boy.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 8,
    icon: "https://img.icons8.com/flat_round/70/000000/cow.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
  {
    id: 9,
    icon: "https://img.icons8.com/color/70/000000/coworking.png",
    description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
  },
];

const Actividades = () => {
  const onClickListener = (viewId) => {
    setActividad();
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: "https://img.icons8.com/search/androidL/100/2ecc71",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Search"
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableHighlight
          style={styles.saveButton}
          onPress={() => onClickListener("search")}
        >
          <Image
            style={[styles.icon, styles.iconBtnSearch]}
            source={{
              uri: "https://img.icons8.com/search/androidL/100/ffffff",
            }}
          />
        </TouchableHighlight>
      </View>

      <FlatList
        style={styles.activityList}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.activityBox}>
              <Image style={styles.image} source={{ uri: item.icon }} />

              <Text style={styles.description}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.primaryR,
    borderRadius: 30,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: COLORS.primaryR,
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  saveButton: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 70,
    alignSelf: "flex-end",
    backgroundColor: COLORS.primaryRLight,
    borderRadius: 30,
  },
  saveButtonText: {
    color: COLORS.white,
  },
  activityList: {
    marginTop: 20,
    padding: 10,
  },
  activityBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  image: {
    width: 45,
    height: 45,
  },
  description: {
    fontSize: 18,
    color: COLORS.gray,
    marginLeft: 10,
  },
});

export default Actividades;
