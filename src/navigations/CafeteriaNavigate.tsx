import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenusItems from "../screens/cafeteria/CafeteriaMenu";

import MenuCCScreen from "../screens/cafeteria/MenuCCScreen";
import MenuDiaScreen from "../screens/cafeteria/MenuDiaScreen";

const Stack = createNativeStackNavigator();
const CafeteriaNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Activitys">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MenusItems" component={MenusItems} />
        <Stack.Screen name="MenuDiaScreen" component={MenuDiaScreen} />
        <Stack.Screen name="MenuCCScreen" component={MenuCCScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CafeteriaNavigate;
