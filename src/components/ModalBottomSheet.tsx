import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { View } from "react-native";
import ButtomMenu from "./ButtomMenu";

const ModalBottomSheet = ()=>{
    return (
        <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <ButtomMenu />
        </View>
      </BottomSheetModal>
    );
}