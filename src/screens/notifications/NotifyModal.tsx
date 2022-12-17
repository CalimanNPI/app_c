import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Layout from "../../components/Layout";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../components/util/Colors";
import FONTS from "../../components/util/Fonts";

function NotifyModal({ navigation, route }: any) {
  console.log(route);

  //title={title}
  //desc={desc}
  //imageUri={icon}
  return (
    <Layout>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            //onPress={() => setModalVisible(false)}
            style={styles.buttomCloaseModal}
          >
            <AntDesign name="close" size={30} color={COLORS.primaryR} />
          </TouchableOpacity>
          {/*<Image source={{ uri: imageUri }} style={styles.imgModal} />**/}
          <Text style={[FONTS.title, { marginTop: 20, color: COLORS.gray }]}>
            {"title"}
          </Text>
          <Text style={[{ marginTop: 30, color: COLORS.gray }, FONTS.body]}>
            {"desc"}
          </Text>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  imgModal: {
    width: "100%",
    height: "25%",
    resizeMode: "contain",
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
    padding: 20,
  },
  buttomCloaseModal: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});

export default NotifyModal;
