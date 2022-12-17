import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

import COLORS from "./util/Colors";
import FONTS from "./util/Fonts";

export default function BottomSheetModalPe({ title, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["1%", "60%", "90%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.item,
          {
            borderLeftColor: isOpen ? COLORS.primaryR : "transparent",
            backgroundColor: isOpen ? COLORS.white : "transparent",
          },
        ]}
        onPress={handlePresentModal}
      >
        <View style={styles.infoContent}>
          <Text style={[FONTS.body, { textAlign: "center" }]}>{title}</Text>
          <AntDesign name="right" size={25} color={COLORS.gray} />
        </View>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{
          borderRadius: 30,
          backgroundColor: COLORS.white,
        }}
        onDismiss={() => setIsOpen(false)}
      >
        {children}
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    width: "100%",
  },
  item: {
    width: "100%",
    flexDirection: "row",
    borderLeftWidth: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
  },
  infoContent: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
